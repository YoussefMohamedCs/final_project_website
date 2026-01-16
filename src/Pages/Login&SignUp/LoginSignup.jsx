import React, { useState } from 'react'
import "./LoginSignUp.scoped.css"
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaFacebook , FaInstagram  , FaTwitter , FaYoutube   } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function LoginSignup() {
  const navigate = useNavigate()
  const [state , setState ] = useState("signUP")
  const navigate_button = ()=>{

    if(state === "login"){
    var text = 10;
    }else{
 var test = 20;
    }
  }
  return (
    <>
    <div className='main_login_sinup_page'>
      <div className="section_login_sinup">
     <div className='container-lg'>
    <div className="row d-flex align-items-center">
      <div className="col-lg-6 d-flex align-items-center flex-column">
<img src="./Assets/images/wired-lineal-1221-test-tubes-hover-pinch.gif" alt="" style={{"width" : " 80%"}}/>
<p className='Text_Under_image'>You Are Few Minutes Way To Boost <br /> your skills with <a href="test.com" >virtual lab </a></p>
      </div>

      <div className="col-lg-6">
        <div className='head_of_form'>
         <div className='select_state'>
          <button className='Sign_in_button' onClick={()=> {setState("signin")}}>sign in</button>
          <button className='SignUp_button' onClick={()=> {setState("signUP")}}>sign up</button>
         </div>
         <h1 className='headrer_form'>{state === "signUP" ? "Create Account" : "Sign In "}</h1>
        </div>
     <div className="form">
     { state === "signUP" ? 
     (<>
     <div className="main_sign_up_form d-flex flex-column gap-4">
      <div className='part_one_sign_up d-flex align-items-center gap-5'>
<input type="text" placeholder='first name' style={{"width" : "100%"}}  className='input_field'/>
<input type="text" placeholder='last name' style={{"width" : "100%"}} className='input_field'/> 

      </div>
           <div className='part_one_sign_up d-flex align-items-center gap-5'>
<input type="text" placeholder='Contact Number' style={{"width" : "100%"}}  className='input_field'/>
<input type="text" placeholder='Address' style={{"width" : "100%"}} className='input_field'/> 

      </div>
      <input type="email" placeholder='gmail' style={{"width" : "100%"}} className='input_field'/> 
      <input type="password" placeholder='password' style={{"width" : "100%"}} className='input_field'/> 
      <input type="password" placeholder='Repeat Password' style={{"width" : "100%"}} className='input_field'/> 


      <button className='submit_button'> Sign Up <IoIosArrowRoundForward size={"30px"} /></button>


      <div className='mt-3 social_list d-flex gap-3 align-items-center justify-content-center'>
      <div className='social_label'>
    <FaFacebook style={{"color" : "#ffff"}}  size={"30px"}/>
      </div>
          <div className='social_label'>
    <FaInstagram style={{"color" : "#ffff"}}  size={"30px"}/>
      </div>
          <div className='social_label'>
    <FaTwitter  style={{"color" : "#ffff"}}  size={"30px"}/>
      </div>
          <div className='social_label'>
    <FaYoutube  style={{"color" : "#ffff"}}  size={"30px"}/>
      </div>
      </div>
     </div>
     </>) 
     :
      (<>
      <div className="main_sign_in_form  d-flex flex-column gap-4">
         <input type="email" placeholder='gmail' style={{"width" : "100%"}} className='input_field'/> 
      <input type="password" placeholder='password' style={{"width" : "100%"}} className='input_field'/> 
            <button className='submit_button'> Sign In <IoIosArrowRoundForward size={"30px"} onClick={()=> navigate("/")} /></button>
            </div>
            
      <div className='mt-4 social_list d-flex gap-3 align-items-center justify-content-center'>
      <div className='social_label'>
    <FaFacebook style={{"color" : "#ffff"}}  size={"30px"}/>
      </div>
          <div className='social_label'>
    <FaInstagram style={{"color" : "#ffff"}}  size={"30px"}/>
      </div>
          <div className='social_label'>
    <FaTwitter  style={{"color" : "#ffff"}}  size={"30px"}/>
      </div>
          <div className='social_label'>
    <FaYoutube  style={{"color" : "#ffff"}}  size={"30px"}/>
      </div>
      </div>
      </> )}
     </div>
      </div>
    </div>
     </div>

  



    </div>
    </div>


    </>
  )
}
