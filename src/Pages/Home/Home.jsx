import React from 'react'
import "./Home.scoped.css"
import Timeline from  "../../Components/Timeline/Timeline"
export default function Home() {
  return (
  <div className="main__section ">

    <div className="section__one d-flex align-items-center">
              <div className="container-lg">
        <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="text_col_one d-flex flex-column gap-4">
                        <h1 className='main__text'> Let’s explore your own <span className='selected__text__in__main'>learning world</span>  </h1>
                    <p className='para__main'>An online learning platform that supports interactive education, progress tracking, and practical skill development.</p>
                    </div>
                    <button className='button__main mt-4'>Read More</button>
                </div>
<div className="col-lg-6">
    <img src="/Assets/Images/wired-outline-112-book-hover-pinch (1).gif" alt="" />
</div>
            
            </div>
        </div>
    </div>
    {/* section one end */}

    <div className="section__two">
        <div className="conteiner-lg">
    <Timeline />
        </div>
    </div>
  </div>
  )
}
