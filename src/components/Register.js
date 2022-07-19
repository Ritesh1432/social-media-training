import React from 'react'
import Header from './Header'
import '../css/Register.css'
import { useNavigate } from "react-router-dom";


function Register() {
    let navigate = useNavigate(); 

    const toLogin = () => {
        navigate('/login')
    }
  return (
    <>
    <Header />
    <div className='container'>
<form className='registerForm'>
    <div className='row'>
        <div className='col-6'>
        <label>First Name:</label>
        <input type='text'  className='form-control' />
        </div>
        <div className='col-6'>
        <label>Last Name:</label>
        <input type='text' className='form-control' />
        </div>
    </div>
    <div className='row'>
        <div className='col-6'>
            <label>Email Address:</label>
            <input type='email' className='form-control'/>
        </div>
        <div className='col-6'>
            <label>Phone:</label>
            <input type='tel' className='form-control' />
        </div>
    </div>
    <div className='row'>
        <div className='col-6'>
            <label>Username:</label>
            <input type='text' className='form-control'/>
        </div>
        <div className='col-6'>
            <label>City:</label>
            <input type='text' className='form-control'/>
        </div>
    </div>
    <div className='row'>
        <div className='col-6'>
            <label>Password:</label>
            <input type='password' className='form-control'/>
        </div>
        <div className='col-6'>
            <label>Confirm Password:</label>
            <input type='password' className='form-control'/>
        </div>
    </div>
    <div className='row'>
        <div col-12 col-md-6>
        <button className='btn btn-primary registerButton'>Register</button>
        <button className='btn btn-primary loginLinkButton' onClick={toLogin}>Already a user? Login</button>
        </div>        
    </div>
</form>
</div>
    </>
  )
}

export default Register