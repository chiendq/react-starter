import './Login.css';
import React from 'react';
import { MdEmail } from 'react-icons/md';
import { AiOutlineArrowRight, AiTwotoneLock } from 'react-icons/ai';

function Login() {
  return (
    <div className="login-bg">
      <div className="login-wrapper">
        <div className="login-img">
          <img
            src="https://colorlib.com/etc/lf/Login_v1/images/img-01.png"
            alt="loginImage"
          />
        </div>
        <div className="login-form">
          <div className="login-title my-24 mb-40 bold">Member Login</div>
          <form autoComplete="off">
            <label htmlFor="input-email" className="input email">
              <MdEmail />
              <input type="email" id="input-email" placeholder="Email" />
            </label>
            <label htmlFor="input-password" className="input password">
              <AiTwotoneLock />
              <input
                id="input-password"
                type="password"
                placeHolder="Password"
              />
            </label>
            <input
              className="btn-login input txt-center"
              type="submit"
              value="login"
            />
          </form>
          <div className="forgot-pass">
            <span>Forgot </span>
            <a href="/">Username / Password?</a>
          </div>
          <div className="create-account">
            <span>Create your Account</span>
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
