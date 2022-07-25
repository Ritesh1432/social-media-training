import React, { useEffect, useState } from 'react'
import Header from './Header'
import '../css/Login.css'
import { useNavigate } from "react-router-dom";


function Login() {
  const [uname,setUname] = useState('')
  const [password,setPassword] = useState('')
  const [fetchedValue,setFetchedValue] = useState([])
  let navigate = useNavigate(); 

  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(data => setFetchedValue(data))  
  }

  const checkCredentials =  (data) => {
    if(data.uname === uname && data.password === password)
    {
    localStorage.setItem('Username',uname)
    }
  }

  fetchedValue && fetchedValue.forEach((data) => {
      checkCredentials(data)
})
   useEffect(() => {
    localStorage.getItem('Username') ? navigate('/'):<></>
   })


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
        <form className='loginForm' onSubmit={handleSubmit}>
          <div className='row'>
              <label className='text-white'>Username:</label>
              <input type='text' className='form-control' onChange={(e) =>setUname(e.target.value)} name="uname" required/>
          </div>
          <div className='row'>
              <label className='text-white'>Password:</label>
              <input type='password' className='form-control' onChange={(e) => setPassword(e.target.value)} name="password" required/>
          </div>
          <button className='btn btn-primary loginButton'>Login</button>
        </form>
      </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Login