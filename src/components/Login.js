import React from 'react'
import Header from './Header'
import '../css/Login.css'

function Login() {
  return (
    <>
    <Header />
    <div className='container'>
      <div className='loginComp'>
        <form className='loginForm'>
          <div className='row'>
              <label>Username:</label>
              <input type='text' className='form-control' />
          </div>
          <div className='row'>
              <label>Password:</label>
              <input type='password' className='form-control' />
          </div>
          <button className='btn btn-primary loginButton' >Login</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login