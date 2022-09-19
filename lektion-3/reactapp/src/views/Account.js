import React from 'react'
import Header from '../components/Header/Header';
import SiteTitle from '../components/SiteTitle/SiteTitle';
import SignIn from '../components/SignIn/SignIn';
import SignUp from '../components/SignUp/SignUp';

const Account = () => {
  return (
    <>
      <Header />
      <SiteTitle />
      <section class="signup-signin form-theme">
        <div class="container">
          <SignIn />
          <SignUp />
        </div>
      </section>
    </>
  )
}

export default Account