import React from 'react';
import "../../styles/components/ForgetPass/textForgetpass.css"
const Forget_pass = () => {
    return (
        <div className="Forgot_pass">
            <div className="forget-pass-text">
                <h1>FORGOT PASSWORD?</h1>
                <p>Enter your email address below and we will send an email allowing you to reset it</p>
            </div>

            <div className="input-mail">
                <input type="email" placeholder="Email..." />
            </div>

            <div className="reset-btn">
                <button className="btn-reset">Reset my password</button>
            </div>

      </div>
    );
  };

export default Forget_pass;