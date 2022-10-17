import React, { useState } from 'react'

const SignInForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (email != "" && password != "") {
            let user = {
                email: email,
                password: password
            }

            fetch('https://lexicon-shared-webapi.azurewebsites.net/api/auth/signin', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => {
                if(res.status === 200) {
                    setError('')
                    return res.text()
                }
                else
                    setError("felaktig e-postadress eller lösenord")
            })
            .then(data => {
                setToken(data)
                sessionStorage.setItem('token', token) 
            })
            .catch(error => setError(error))
        }

    }

    const handleChange = (e) => {
        switch(e.target.id) {
            case "signin_email":
                setEmail(e.target.value)
                break;

            case "signin_password":
                setPassword(e.target.value)
                break;
        }
    }


    return (
        <div className="card">
            <div className="card-body">
                <h1 className="card-title">LOGIN</h1>
                <form id="signinForm" onSubmit={handleSubmit} noValidate>
                    <div className="mb-2">{error}</div>
                    <div className="my-4">
                        <label htmlFor="signin_email">Email <span className="required">*</span></label>
                        <input value={email} onChange={handleChange} id="signin_email" type="email" autoComplete="email" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="signin_password">Password <span className="required">*</span></label>
                        <input value={password} onChange={handleChange} id="signin_password" type="password" autoComplete="current-password" required />
                    </div>
                    <div className="mb-4 d-grid">
                        
                        <button type="submit" className="btn btn-lg btn-theme">LOG IN</button>
                    </div>
                    <div className="mb-4 d-flex justify-content-between align-items-center">
                        <div className="d-flex">
                            <input id="signin_rememberMe" type="checkbox" className="me-2" />
                            <label htmlFor="signin_rememberMe" >Remember me</label>
                        </div>
                        <a href="#">Lost your password?</a>
                    </div>
                    <div className="mb-4 external-logins">
                        <div className="mb-0">
                            <div className="label">OR LOGIN WITH</div>
                            <div className="line"></div>
                        </div>
                    </div>
                    <div className="external-socialmedia-buttons">
                        <div className="facebook-button">
                            <button></button>
                        </div>
                        
                        <div className="google-button">
                            <button></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignInForm