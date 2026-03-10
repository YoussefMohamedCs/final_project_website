import React from 'react'
import './CSpage.scoped.css'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import BackArrow from '../../Components/BackArrow/BackArrow'
export default function Cspage() {
  return (
    <>
    <BackArrow path={'/faculties'} />
    <div className='main__cs__page d-flex align-items-center'> 
<div className="container-lg">
    <div className="row d-flex align-items-center justify-content-center">
        <div className="col-lg-6 ">
            <Link className="facultie__card" to={'assistant'}>
    <h2>try database assistant !</h2>
</Link>
        </div>
    </div>
</div>



   
    </div>
       <Footer />

       </>
  )
}
