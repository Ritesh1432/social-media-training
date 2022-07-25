import React, {  useState } from 'react'
import Header from './Header'
import '../css/Register.css'
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';


function Register() {
    const [formData,setFormData] = useState([])
    let navigate = useNavigate(); 
    const toLogin = () => {
        navigate('/login')
    }
   
    const handleChange = ((e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    })

    
    const handleSubmit = ((e) => {
        
        if(formData.password !== formData.confpass){
            alert('Password did not match')
        }
        else{
            e.preventDefault();
            fetch('http://localhost:3000/users',{
            method:'POST',
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(formData)
})
swal("Congratulations", "You are succesfully registered!", "success");
    navigate('/login')
        }
    })



    
    
    
  return (
    <>
    <Header />
    <div className='container'>
<form className='registerForm' onSubmit={handleSubmit} >
    <div className='row'>
        <div className='col-6'>
        <label>First Name:</label>
        <input type='text'  className='form-control' name='fname' onChange={handleChange} required/>
        </div>
        <div className='col-6'>
        <label>Last Name:</label>
        <input type='text' className='form-control' name='lname' onChange={handleChange} required/>
        </div>
    </div>
    <div className='row'>
        <div className='col-6'>
            <label>Email Address:</label>
            <input type='email' className='form-control'  name='emailid' onChange={handleChange} required/>
        </div>
        <div className='col-6'>
            <label>Phone:</label>
            <input type='tel' className='form-control' name='phoneNo'  onChange={handleChange}/>
        </div>
    </div>
    <div className='row'>
        <div className='col-6'>
            <label>Username:</label>
            <input type='text' className='form-control' name='uname' onChange={handleChange} required/>
        </div>
        <div className='col-6'>
            <label>City:</label>
            <input type='text' className='form-control' name='city' onChange={handleChange}/>
        </div>
    </div>
    <div className='row'>
        <div className='col-6'>
            <label>Password:</label>
            <input type='password' className='form-control' name='password' onChange={handleChange} required/>
        </div>
        <div className='col-6'>
            <label>Confirm Password:</label>
            <input type='password' className='form-control' name='confpass' onChange={handleChange} required/>
        </div>
    </div>
    <div className='row'>
            <div col-12 col-md-6>
            <button className='btn btn-primary registerButton' type='submit'>Register</button>
            <button className='btn btn-primary loginLinkButton' onClick={toLogin}>Already a user? Login</button>
            </div>      
    </div>
</form>
</div>
    </>
  )
}

export default Register