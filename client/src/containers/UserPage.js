import React  from 'react';
import axios from 'axios';
class UserPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.location.state.id,
            user: {},
            norUser:{},
            history:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3030/user/' + this.state.id)
       .then(data=>{
            this.setState({user: data.data})
            console.log(data)
        })
        .catch(err=>console.log(err));
        const token=localStorage.getItem("auth-token");
        axios.get('http://localhost:3030/login',{headers:{"auth-token":token}}).then((data)=>{ 
        console.log('nor',data.data,'data',data)    
        this.setState({norUser: data.data})})
            
    }
    render(){
        return(Object.keys(this.state.user).length!==0?
            (<div>
                <div><img src={this.state.user.avatar}></img></div>
                <div><h1>ID : {this.state.id}</h1></div>
                <div><h1>Name : {this.state.user.name}</h1></div>
                <div><h1>Email : {this.state.user.email}</h1></div>
                <div><h1>Role : {this.state.user.role}</h1></div>
                <div><h1>Address : {this.state.user.address}</h1></div>
            </div>):
            (<div>
                <div><h1>ID : {this.state.norUser.id}</h1></div>
                <div><h1>Name : {this.state.norUser.name}</h1></div>
                <div><h1>Email : {this.state.norUser.email}</h1></div>
                <div><h1>Phone number : {this.state.norUser.phonenum}</h1></div>
                <div><h1>Address : {this.state.norUser.address}</h1></div>
                <h1>Order history: 
                    {()=>
                    this.state.norUser.history.map((x,key)=>{
                       return (
                       <div key={key}>
                        <h2>Product name: {x.name}</h2>
                        <h2>Price: {x.price}</h2>
                        <h2>Quantity: {x.quantity}</h2>
                        <h2>Purchase time: {x.dateOfPurchase}</h2>
                    </div>)})
                    } 
                </h1>
            </div>)
        )
    }
}

export default UserPage;