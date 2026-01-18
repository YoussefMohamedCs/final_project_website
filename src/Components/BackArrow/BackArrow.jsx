import React from 'react'
import { FaCircleArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function BackArrow({path}) {
  return (
    <div>
        <Link to={path}>
      <FaCircleArrowLeft size={"50px"} style={{"background" : "var(--button_in_main_background)" , "position" : "absolute" , "top" : "30px" , "right" : "50px"}}/>
</Link>
    </div>
  )
}
