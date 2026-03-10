import React from 'react'
import "./Faculties.scoped.css"
import { Link } from 'react-router-dom'
export default function Faculties() {
  return (
    <div className='faculties__main'>
        <div className="container-lg">
            <div className="row">
<div className="col-lg-4">
<Link className="facultie__card" to={'cs'}>
    <h2>Faculty of Computers and Artificial Intelligence</h2>
</Link>
</div>
<div className="col-lg-4">
    <Link className="facultie__card" to={'pharmacy'}>
      <h2>Faculty of Pharmacy</h2>

    </Link>
</div>
<div className="col-lg-4">
    <div className="facultie__card still_unavailable">
         <h2>Faculty of Engineering</h2>
    </div>
     
    
</div>
<div className="col-lg-4">
    <div className="facultie__card still_unavailable">
      <h2>Faculty of Mass Communication</h2>

    </div>

    
</div>
<div className="col-lg-4">
    <div className="facultie__card still_unavailable">
      <h2>Faculty of Management and Business Intelligence</h2>

    </div>

    
</div>
<div className="col-lg-4">
    <div className="facultie__card still_unavailable">
      <h2>Faculty of Dentistry</h2>

    </div>

    
</div>
<div className="col-lg-4">
    <div className="facultie__card still_unavailable">
      <h2>Faculty of Nursing</h2>

    </div>

    
</div>
<div className="col-lg-4">
    <div className="facultie__card still_unavailable">
      <h2>Faculty of Physical Therapy</h2>

    </div>

    
</div>
<div className="col-lg-4">
    <div className="facultie__card still_unavailable">
      <h2>Faculty of Medicine</h2>

    </div>

    
</div>
            </div>

        </div>
      
    </div>
  )
}
