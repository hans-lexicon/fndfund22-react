import React from 'react'

const SignUp = () => {
  return (
    <div className="card">
        <div className="card-body">
            <h1 className="card-title">REGISTER</h1>
            <p className="card-text text-small">Registering for this site allows you to access your order status and history. Just fill in the fields below, and we’ll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.</p>
            <form id="signupForm" novalidate>
                <div className="mb-4">
                    <label for="signup_firstName">Firstname <span className="required">*</span></label>
                    <input id="signup_firstName" type="text" required />
                </div>
                <div className="mb-4">
                    <label for="signup_lastName">Lastname <span className="required">*</span></label>
                    <input id="signup_lastName" type="text" required />
                </div>
                <div className="mb-4">
                    <label for="signup_email">E-mail <span className="required">*</span></label>
                    <input id="signup_email" type="email" required />
                </div>
                <div className="mb-4">
                    <label for="signup_password">Password <span className="required">*</span></label>
                    <input id="signup_password" type="password" required />
                </div>
                <p className="card-text">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#">privacy policy</a>.</p>
                <div className="mb-3 d-grid">
                    <button type="submit" className="btn btn-lg btn-theme">REGISTER</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp