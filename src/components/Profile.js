import React,{useState,useEffect} from 'react'
import swal from 'sweetalert'
import Header from './Header'
import { useNavigate } from "react-router-dom";



function Profile() {
  const [userdata,setUserData] = useState([])
  const [profiledata,setProfileData] = useState({})
  let navigate = useNavigate(); 

 
  useEffect(() => {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(data => setUserData(data))  

  },[])

  useEffect(() => {
      userdata.filter(user => {
      if(localStorage.getItem('Username') === user.uname)
      setProfileData(user)

    })
  },[userdata])

  console.log(profiledata);
  return (
    <>
    <Header />
    {
      localStorage.getItem('Username') ? (
    
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <label>First Name:</label>
          <p className='form-control'>{profiledata.fname}</p>
        </div>
        <div className='col-12 col-md-6'>
          <label>Last Name:</label>
          <p className='form-control'>{profiledata.lname}</p>
        </div>
      </div>

      <div className='row'>
        <div className='col-12 col-md-6'>
          <label>Email Address:</label>
          <p className='form-control'>{profiledata.emailid}</p>
        </div>
        <div className='col-12 col-md-6'>
          <label>Phone Number:</label>
          <p className='form-control'>{profiledata.phoneNo}</p>
        </div>
      </div>

      <div className='row'>
        <div className='col-12 col-md-6'>
          <label>Username:</label>
          <p className='form-control'>{profiledata.uname}</p>
        </div>
        <div className='col-12 col-md-6'>
          <label>City:</label>
          <p className='form-control'>{profiledata.city}</p>
        </div>
      </div>
    </div>
      ):
      (
        swal("Oops","Looks like you have not signed in","error"),
        navigate('/')
      )
      
      }
    </>
  )
}

export default Profile