import React, { useEffect, useState } from 'react'
import "./Navbar.scoped.css"
import { RxAvatar } from "react-icons/rx";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [navStyle , setnav] = useState()
useEffect(()=>{
window.addEventListener("scroll" , ()=>{
  let windowScrollVar = window.scrollY
  if(windowScrollVar >= 200){
    setnav(true)
    console.log("hello")
  }else{
    setnav(false)
  }
    console.log(navStyle)

})
} , [])



  return (
    <div className={navStyle ? "nav__main nav__style" : "nav__main"}>
    <div className="container-lg">
      <div className="row align-items-center justify-content-between">
        <div className="col-lg-1 d-flex align-items-center jsutify-content-center">
          <img src="/Assets/images/MTI-Logo-1.png" style={{"height" : "100%" , "width" : "100%"}} alt="" />
        </div>
        <div className="col-lg-7">
          <ul className='nav__list'>
            <li><Link to={'/'}> Home </Link></li>
            <li><Link to={'about-us'}>About Us </Link></li>
            <li><Link to={'faculties'}>faculties </Link>  </li>
          </ul>
        </div>
        <div className="col-lg-1 d-flex align-items-center justify-content-center ">
          <RxAvatar size={'50px'} style={{"cursor":"pointer" , "color":"#ffff"} }  />

        </div>
      </div>
    </div>
    </div>
  )
}
