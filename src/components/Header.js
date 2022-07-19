import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Header.css'

function Header() {
  return (
    <>
     <div>
     <nav className="navbar navbar-expand-lg navbar-light navclass">
       <Link className="navbar-brand navbarBrand" to = '/'>PostFeeD</Link>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon bg-white p-3"></span>
       </button>
  

  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <Link className="nav-link navItemClass" to='/'>Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link navItemClass" to='/profile'>Profile</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link navItemClass" to='/settings'>Settings</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link navItemClass" to='/register'>Register/Login</Link>
      </li>
    </ul>
  </div>
</nav>
     </div>
   
    </>
  )
}

export default Header