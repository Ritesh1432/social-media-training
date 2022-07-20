import React from 'react'
import Header from './Header'
import '../css/Login.css'

function Login() {
  return (
    <>
    <Header />
    <div className='container'>
      <div className='row '>
        <div className='col-12 col-md-10 offset-md-1  mainLoginComp'>
          <div className='leftImgClass'>
            <img src={require('../images/logo.png')} alt="logo" width='500' height='500' />
            <figcaption className='leftImageText'>Post Feed</figcaption>
          </div>
        <div className='loginComp'>
          <div className='loginImgClass'>
            <img src={require('../images/test.png')} alt="test" width='200' height='150'/>
          </div>
        <form className='loginForm'>
          <div className='row'>
              <label className='text-white'>Username:</label>
              <input type='text' className='form-control' />
          </div>
          <div className='row'>
              <label className='text-white'>Password:</label>
              <input type='password' className='form-control' />
          </div>
          <button className='btn btn-primary loginButton' >Login</button>
        </form>
      </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Login