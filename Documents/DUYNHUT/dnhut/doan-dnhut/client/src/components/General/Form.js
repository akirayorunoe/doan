import React from 'react';
import Image from '../../assets/Logo.svg';
import '../../styles/components/General/Form.css';
import Button from '../General/Button';
import {Link} from 'react-router-dom';
const Form =()=>{
    return (
        <div class="login-wrap">
            <form class="modal-content animate" method="post">
                <div className="headerForm">
                    <h2> USER LOGIN </h2>
                    <img className="logo" src={Image} alt="Logo" />
                </div>

                <div className="form-container">
                    <input type="text" placeholder="Email" name="uname" required/>
                </div>

                <div className="form-container">
                    <input type="password" placeholder="Password" name="psw" required/>
                </div>
                
                <div className="form-container">
                    <Button name='Sign In' className="header-btn"/>
                </div>
                
                <div className="forget">
                    <Link to="/ForgetPass"> Forget your password? </Link>
                </div>
            
            </form>
        </div>
    );
}
export default Form;