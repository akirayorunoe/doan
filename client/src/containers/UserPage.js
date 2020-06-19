import React, {useState, useEffect }  from 'react';
import "../styles/components/SignUp/SignUp.css";
import {useSelector} from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faEnvelope,
  faKey,
  faPhoneAlt,
  faUser,
  faPhone,
  faLocationArrow
} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
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
            phonenum : ''
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3030/user/' + this.state.id)
       .then(data=>{
            this.setState({
                name: data.data.name,
                address: data.data.address,
                phonenum: data.data.phonenum,
                email: data.data.email
            })
        })
        .catch(err=>console.log(err));
    }

    update() {
        const url = 'http://localhost:3030/user/' + this.state.id
        axios.put(url, {
            name : this.state.name,
            email : this.state.email,
            phonenum: this.state.phonenum,
            address: this.state.address
        })
        .then(res2 => {
            if (res2.data.status == 'success') {
                this.setState({
                    name: res2.data.name,
                    address: res2.data.address,
                    phonenum: res2.data.phonenum,
                    email: res2.data.email
                })
            } else {
                alert(res2.data.message)
            }
        })
    }

    render(){
        return(
            <div className="signup_box_container row">
                <div><img src={this.state.user.avatar}></img></div>
                <div className="signup_box col-lg-6 col-md-12 col-sm-12">
                    <div className="container-form">
                        <div className="form-header">
                            <h1>Sign up</h1>
                            <h4>Please fill in this form to create an account </h4>
                        </div>
                        <div className="input-field">
                            <div className="textInput">
                            <FontAwesomeIcon icon={faUser} />
                            <input
                                id="username"
                                type="text"
                                placeholder="Username"
                                value={this.state.name}
                                onChange={(e) => {
                                this.setState({name : e.target.value});
                                }}
                            ></input>
                            </div>
                            {/* them code bo sung */}
                            <div className="textInput">
                            <FontAwesomeIcon icon={faLocationArrow} />
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
                            <div className="textInput">
                            <FontAwesomeIcon icon={faPhone} />
                            <input
                                id="phonenum"
                                type="text"
                                placeholder="Phone"
                                value={this.state.phonenum}
                                onChange={(e) => {
                                this.setState({phonenum : e.target.value});
                                }}
                            ></input>
                            </div>
                            <div className="textInput">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <input
                                type="email"
                                type="text"
                                id="email"
                                value={this.state.email}
                                onChange={(e) => {
                                this.setState({email : e.target.value});
                                }}
                            ></input>
                            </div>
                        </div>

                        <div className="signup_btn">
                            <button className="btn-ok" onClick={this.update}>Cập nhật</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserPage;