import React, { useState } from 'react'

const SignUpForm = () => {

    const [firstName, setFirstName] = useState('')
    const [firstNameError, setFirstNameError] = useState('')
    const [firstNameValid, setFirstNameValid] = useState(false)

    const [lastName, setLastName] = useState('')
    const [lastNameError, setLastNameError] = useState('')
    const [lastNameValid, setLastNameValid] = useState(false)

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [emalValid, setEmailValid] = useState(false)
    
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [passwordValid, setPasswordValid] = useState(false)


    const validateMinimumLength = (value, minLength = 2) => {
        if (value.length >= minLength)
            return true  
        return false
    }
    const validateEmail = (value) => {
        return value.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    }
    const validatePassword = (value) => {
        return value.match(
            /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
        )
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()

        for(let i=0; i< e.target.length; i++)
            onSubmitValidate(e.target[i])
        
        if(firstNameValid && lastNameValid && emalValid && passwordValid) {
            let user = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            }

            fetch('https://lexicon-shared-webapi.azurewebsites.net/api/auth/signup', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => {
                console.log(res)

                if (res.status === 200)
                    console.log('användaren registrerad')
            })

        }

    }

    const onSubmitValidate = (element) => {
        switch(element.id) {
            case "signup_firstName":
                if (validateMinimumLength(element.value)) {
                    setFirstNameError('')
                    setFirstNameValid(true)
                }           
                else {
                    setFirstNameError('Du måste ange ett giltigt förnamn')
                    setFirstNameValid(false)
                }                   
                break;

            case "signup_lastName":
                if (validateMinimumLength(element.value, 5)) {
                    setLastNameError('')
                    setLastNameValid(true)
                }
                else {
                    setLastNameError('Du måste ange ett giltigt efternamn')
                    setLastNameValid(false)
                }                   
                break;

            case "signup_email":
                if (validateEmail(element.value)) {
                    setEmailError('')
                    setEmailValid(true)
                }
                else {
                    setEmailError('Du måste ange en giltig e-postadress')
                    setEmailValid(false)
                }                  
                break;

            case "signup_password":
                if (validatePassword(element.value)) {
                    setPasswordError('')
                    setPasswordValid(true)
                }
                else {
                    setPasswordError('Du måste ange ett giltigt lösenord')
                    setPasswordValid(false)
                }
                break;
        }
    }
    
    const onChangeHandler = (e) => { 
           
        switch(e.target.id) {
            case "signup_firstName":
                setFirstName(e.target.value)
                if (validateMinimumLength(e.target.value))
                    setFirstNameError('')
                else 
                    setFirstNameError('Du måste ange ett giltigt förnamn')
                break;

            case "signup_lastName":
                setLastName(e.target.value)
                if (validateMinimumLength(e.target.value, 5))
                    setLastNameError('')
                else 
                    setLastNameError('Du måste ange ett giltigt efternamn')
                break;

            case "signup_email":
                setEmail(e.target.value)
                if (validateEmail(e.target.value))
                    setEmailError('')
                else 
                    setEmailError('Du måste ange en giltig e-postadress')
                break;

            case "signup_password":
                setPassword(e.target.value)
                if (validatePassword(e.target.value))
                    setPasswordError('')
                else 
                    setPasswordError('Du måste ange ett giltigt lösenord')
                break;
        }
    }

    return (
        <div className="card">
            <div className="card-body">
                <h1 className="card-title">REGISTER</h1>
                <p className="card-text text-small">Registering for this site allows you to access your order status and history. Just fill in the fields below, and we’ll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.</p>
                
                <form id="signupForm needs-validation" noValidate onSubmit={onSubmitHandler}>
                    <div className="mb-4">
                        <label htmlFor="signup_firstName">Firstname <span className="required">*</span></label>
                        <input value={firstName} onChange={onChangeHandler} id="signup_firstName" type="text" required />
                        <div>{firstNameError}</div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="signup_lastName">Lastname <span className="required">*</span></label>
                        <input value={lastName} onChange={onChangeHandler} id="signup_lastName" type="text" autoComplete="family-name" required />
                        <div>{lastNameError}</div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="signup_email">Email <span className="required">*</span></label>
                        <input value={email} onChange={onChangeHandler} id="signup_email" type="email" autoComplete="email" required />
                        <div>{emailError}</div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="signup_password">Password <span className="required">*</span></label>
                        <input value={password} onChange={onChangeHandler} id="signup_password" type="password" autoComplete="current-password" required />
                        <div>{passwordError}</div>
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

export default SignUpForm