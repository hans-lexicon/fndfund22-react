import React from 'react'
import { NavLink } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="card">
        <div className="card-body">
            <h1 className="card-title">LOGIN</h1>
            <form id="siginForm" novalidate>
                <div className="mb-4">
                    <label for="signin_email">E-mail <span className="required">*</span></label>
                    <input id="signin_email" type="email" required />
                </div>
                <div className="mb-4">
                    <label for="signin_password">Password <span className="required">*</span></label>
                    <input id="signin_password" type="password" required />
                </div>
                <div className="mb-4 d-grid">
                    <button type="submit" className="btn btn-lg btn-theme">LOG IN</button>
                </div>
                <div className="mb-4 d-flex justify-content-between align-items-center">
                    <div className="remember-me">
                        <input id="signin_rememberMe" type="checkbox" />
                        <label for="signin_rememberMe">Remember me</label>
                    </div>
                    <NavLink to="/lost-password">Lost your password?</NavLink>
                </div>
                <div className="external-logins">
                    <div className="external-logins-title">
                        <div className="external-logins-label">OR LOGIN WITH</div>
                        <div className="external-logins-line"></div>
                    </div>
                    <div className="external-logins-buttons">
                        <div className="facebook-button">
                            <button></button>
                        </div>
                        <div className="google-button">
                            <button></button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignIn