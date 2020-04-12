import React from "react";
import '../../styles/components/SignUp/SignUp.css';
import bg_signup from '../../assets/ovegets.jpeg';
const SignUp = props => {
  return (
    <div className="signup_box_container">
      <div className="bg-signup">
        <img className="bg-image" src={bg_signup} alt="hero-img"></img>
        <div className="bg-text">
          <h3>READY TO DIVE INTO THE WORLD OF</h3>
          <h1>VEGATABLE?</h1>
        </div>
      </div>
      <div className="signup_box">
        <div className="container-form">
          <div className="form-header">
            <h1>SIGN UP </h1>
            <h4>Please fill in this form to create an account </h4>
          </div>
          <div className="input-field">
            <div className="user-name">
              <h3>UserName</h3>
              <input id="username"></input>
            </div>
            <div className="pass">
              <h3>Password</h3>
              <input type="password" id="password"></input>  
            </div>
            <div className="confirm-pass">
              <h3>Confirm password</h3>
              <input type="password" id="confirm-password"></input>
            </div>
            <div className="email">
              <h3>Email</h3>
              <input type="email" id="email"></input>
            </div>
            <div className="check">
              <input type="checkbox" />
              <p> Accept the term of Use & Privacy Policy </p>
            </div>
          </div>
          
        
        <div className="signup_btn">
          <button className="btn-ok">Sign Up</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
