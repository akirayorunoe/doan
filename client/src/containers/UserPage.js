import React, {useState, useEffect }  from 'react';
import '../styles/containers/User.css';
import axios from 'axios';
import Swal from 'sweetalert2';
class UserPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.location.state.id,
            user: {},
            name : '',
            email : '',
            password: '',
            password2 : '',
            phonenum : '',
            address: '',
            norUser:{},
            history:[]
        }

        this.update = this.update.bind(this)
    }

    componentDidMount(){
        axios.get('http://localhost:3030/user/' + this.state.id)
       .then(data=>{
           console.log(data.data.history)
            this.setState({
                id : data.data.id,
                name: data.data.name,
                address: data.data.address,
                phonenum: data.data.phonenum,
                email: data.data.email,
                history:data.data.history,
            })
        })
        .catch(err=>console.log(err));
        const token=localStorage.getItem("auth-token");
        axios.get('http://localhost:3030/login',{headers:{"auth-token":token}}).then((data)=>{ 
        console.log('nor',data.data,'data',data)
        //this.setState({ norUser : data.data  })
        this.setState({
            id : data.data.id,
            name: data.data.name,
            address: data.data.address,
            phonenum: data.data.phonenum,
            email: data.data.email,
            history:data.data.history
        })})
            
    }

    update() {
        axios.put('http://localhost:3030/user/' + this.state.id, {
            name : this.state.name,
            email : this.state.email,
            phonenum: this.state.phonenum,
            address: this.state.address,
        })
        .then(res2 => {
            if (res2.data.status == 'success') {
                alert('thanh xong')
                this.setState({
                    name: res2.data.name,
                    address: res2.data.address,
                    phonenum: res2.data.phonenum,
                    email: res2.data.email
                })
            } else {
                alert('that bai')
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: res2.data.message
                  })
            }
        })
    }

    render(){
        // return(
        //     <div className="signup_box_container row">
        //         <div><img src={this.state.user.avatar}></img></div>
        //         <div className="signup_box col-lg-6 col-md-12 col-sm-12">
        //             <div className="container-form">
        //                 <div className="form-header">
        //                     <h1>Sign up</h1>
        //                     <h4>Please fill in this form to create an account </h4>
        //                 </div>
        //                 <div className="input-field">
        //                     <div className="textInput">
        //                     <FontAwesomeIcon icon={faUser} />
        //                     <input
        //                         id="username"
        //                         type="text"
        //                         placeholder="Username"
        //                         value={this.state.name}
        //                         onChange={(e) => {
        //                         this.setState({name : e.target.value});
        //                         }}
        //                     ></input>
        //                     </div>
        //                     {/* them code bo sung */}
        //                     <div className="textInput">
        //                     <FontAwesomeIcon icon={faLocationArrow} />
        //                     <input
        //                         id="address"
        //                         type="text"
        //                         placeholder="Address"
        //                         value={this.state.address}
        //                         onChange={(e) => {
        //                         this.setState({address : e.target.value});
        //                         }}
        //                     ></input>
        //                     </div>
        //                     <div className="textInput">
        //                     <FontAwesomeIcon icon={faPhone} />
        //                     <input
        //                         id="phonenum"
        //                         type="text"
        //                         placeholder="Phone"
        //                         value={this.state.phonenum}
        //                         onChange={(e) => {
        //                         this.setState({phonenum : e.target.value});
        //                         }}
        //                     ></input>
        //                     </div>
        //                     <div className="textInput">
        //                     <FontAwesomeIcon icon={faEnvelope} />
        //                     <input
        //                         type="email"
        //                         type="text"
        //                         id="email"
        //                         value={this.state.email}
        //                         onChange={(e) => {
        //                         this.setState({email : e.target.value});
        //                         }}
        //                     ></input>
        //                     </div>
        //                 </div>

        //                 <div className="signup_btn">
        //                     <button className="btn-ok" onClick={this.update}>Cập nhật</button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        return(Object.keys(this.state.user).length!==0?
            (<div className="profile-container">
            <div className="user-img">
                {/* <img src={this.state.user.avatar}/> */}
                <img src="https://i.pinimg.com/564x/fd/0c/55/fd0c559856ca991e9e28937dc802f0b0.jpg"/>
                <input type="file" id='inp-avatar' title="foo"/>
            </div>
            <div className="user-profile">
            <div className="u-id">
                <p>ID : {this.state.id}</p>
            </div>
            <div className="uname">
                <p>Name :</p>
                <input
                id="name"
                type="text"
                placeholder="Name"
                value={this.state.name}
                onChange={(e) => {
                this.setState({name : e.target.value});
                }}
                ></input>
            </div>
            <div className="user-contact">
                <div className="u-mail">
                    <p>Email :</p>
                    <input
                    id="email"
                    type="text"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={(e) => {
                    this.setState({email : e.target.value});
                    }}
                    ></input>
                </div>
                <div className="u-phone">
                    <p>Phone :</p>
                    <input
                    id="phone"
                    type="text"
                    placeholder="Phone"
                    value={this.state.phonenum}
                    onChange={(e) => {
                    this.setState({phonenum : e.target.value});
                    }}
                    ></input>
                </div>
            </div>   
            <div className="u-address">
                    <p>Address :</p>
                    <input
                    id="address"
                    type="text"
                    placeholder="Address"
                    value={this.state.address}
                    onChange={(e) => {
                    this.setState({address : e.target.value});
                    }}
                    ></input>
            </div>
            <div className="update_btn">
                <button className="btn-ok" onClick={this.update}>Update</button>
            </div>
            </div>
            </div>)
            :
            (<div className="profile-container">
                <div className="user-img">
                    {/* <img src={this.state.user.avatar}/> */}
                    <img src="https://i.pinimg.com/564x/fd/0c/55/fd0c559856ca991e9e28937dc802f0b0.jpg"/>
                    <input type="file" id='inp-avatar' title="foo"/>
                </div>
                <div className="user-profile">
                <div className="u-id">
                    <p>ID : {this.state.id}</p>
                </div>
                <div className="uname">
                    <p>Name :</p>
                    <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={(e) => {
                    this.setState({name : e.target.value});
                    }}
                    ></input>
                </div>
                <div className="user-contact">
                    <div className="u-mail">
                        <p>Email :</p>
                        <input
                        id="email"
                        type="text"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={(e) => {
                        this.setState({email : e.target.value});
                        }}
                        ></input>
                    </div>
                    <div className="u-phone">
                        <p>Phone :</p>
                        <input
                        id="phone"
                        type="text"
                        placeholder="Phone"
                        value={this.state.phonenum}
                        onChange={(e) => {
                        this.setState({phonenum : e.target.value});
                        }}
                        ></input>
                    </div>
                </div>   
                <div className="u-address">
                        <p>Address :</p>
                        <input
                        id="address"
                        type="text"
                        placeholder="Address"
                        value={this.state.address}
                        onChange={(e) => {
                        this.setState({address : e.target.value});
                        }}
                        ></input>
                </div>
                <div className="update_btn">
                    <button className="btn-ok" onClick={this.update}>Update</button>
                </div>
                <div className="orderHis"><h1>Order history:</h1> 
    {

        this.state.history?this.state.history.map((x,key)=>{
                        let cdate = (new Date(x.dateOfPurchase)).toString();
                       return (
                       <ul key={key}>
                        <li>Product name: {x.name}</li>
                        <li>Price: {x.price}</li>
                        <li>Quantity: {x.quantity}</li>
                        <li>Purchase time: {cdate}</li>
                    </ul>)}):null}</div>
                </div>
            </div>)
        )
    }
}

export default UserPage;