import React,{useState} from 'react';
import Image from '../../assets/Logo.svg';
import '../../styles/components/General/Form.css';
import Button from '../General/Button';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {usrLogin} from '../../action/user-login'

const Form =()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const dispatch = useDispatch();
    const loginFunciton=()=>{
        //e.preventDefault();
        
        axios.post('http://localhost:3030/login',{email,password})
            .then((data)=>{
                //console.log(data.headers['auth-token'])
            localStorage.setItem('auth-token',data.headers['auth-token'])
            //console.log(data)
            alert('Login success')
            return dispatch(usrLogin(data.data))})
            .catch(err=>{
                console.log(err)
                const e=err.response.data;
                let s='';
                for(let i of e){s+=i.message;}
                 alert(s);
                });
    }
    return (
        <div className="login-wrap">
            <div className="modal-content animate">
                <div className="headerForm">
                    <h2> USER LOGIN </h2>
                    <img className="logo" src={Image} alt="Logo" />
                </div>

                <div className="form-container">
                    <input type="text" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
                </div>

                <div className="form-container">
                    <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
                </div>
                
                <div className="form-container">
                    <Button name='Sign In' className="header-btn" onClick={loginFunciton}/>
                </div>
                
                <div className="forget">
                    <Link to="/ForgetPass"> Forget your password? </Link>
                </div>
            
            </div>
        </div>
    );
}
export default Form;