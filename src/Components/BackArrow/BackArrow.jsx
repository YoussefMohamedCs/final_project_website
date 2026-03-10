import React from 'react'
import { FaCircleArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function BackArrow({path}) {
  return (
    <div>
        <Link to={path}>
      <FaCircleArrowLeft size={"70px"} style={{"color" : "var(--button_in_main_background)", "borderRadius":"100%" , "position" : "absolute" , "top" : "50px" , "left" : "50px"}}/>
</Link>
    </div>
  )
}
