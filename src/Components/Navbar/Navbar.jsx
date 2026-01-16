import React from 'react'
import "./Navbar.scoped.css"
import { RxAvatar } from "react-icons/rx";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='nav__main'>
    <div className="container-lg">
      <div className="row align-items-center justify-content-between">
        <div className="col-lg-1 d-flex align-items-center jsutify-content-center">
          <img src="/Assets/images/MTI-Logo-1.png" style={{"height" : "100%" , "width" : "100%"}} alt="" />
        </div>
        <div className="col-lg-7">
          <ul className='nav__list'>
            <li><Link> Home </Link></li>
            <li><Link>About Us </Link></li>
            <li><Link>faculties </Link>  </li>
          </ul>
        </div>
        <div className="col-lg-1 d-flex align-items-center justify-content-center ">
          <RxAvatar size={'50px'} style={{"cursor":"pointer"}} />

        </div>
      </div>
    </div>
    </div>
  )
}
