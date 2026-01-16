import React, { useEffect } from 'react'
import "./Home.scoped.css"
import Timeline from  "../../Components/Timeline/Timeline"
import { FaWindows, FaApple, FaLinux, FaDesktop, FaDownload } from "react-icons/fa";

export default function Home() {
const cards = [
  {
    icon: <FaWindows />,
    title: "Desktop",
    platform: "Windows",
    text:
      "Download the Windows version and explore everything offline. It's quick to install, easy to use, and built to keep you connected—anytime, anywhere.",
  },
  {
    icon: <FaApple />,
    title: "Desktop",
    platform: "Mac",
    text:
      "Use a Mac, works smoothly on macOS too. Enjoy a clean design and fast performance made for your Apple device.",
  },
  {
    icon: <FaLinux />,
    title: "Desktop",
    platform: "Linux",
    text:
      "Use a Linux, lightweight and runs great on most distributions. Built for speed, privacy, and full control.",
  },
];
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


     <section className="download">
      <h2>
        Transform Your <span>Communication</span>
      </h2>
      <p className="subtitle">with Instant Connectivity</p>
      <p className="desc">
        Install desktop app on all your devices to stay engaged and continue
        every conversation.
      </p>

      <div className="cards">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="icon">{card.icon}</div>

            <h3>{card.title}</h3>
            <h4>{card.platform}</h4>

            <p>{card.text}</p>

            <button>
              <FaDownload />
              Download
            </button>
          </div>
        ))}
      </div>
    </section>
    </div>

  )
}
