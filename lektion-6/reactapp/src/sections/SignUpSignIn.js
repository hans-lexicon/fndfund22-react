import React from 'react'
import SignInForm from '../components/SignInForm'
import SignUpForm from '../components/SignUpForm'

const SignUpSignIn = () => {
  return (
    <section className="signup-signin form-theme">
        <div className="container">
            <SignInForm />
            <SignUpForm />
        </div>
    </section>
  )
}

export default SignUpSignIn