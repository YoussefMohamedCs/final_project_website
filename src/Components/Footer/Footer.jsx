import React from 'react'
import "./Footer.scoped.css"
import Wave from 'react-wavify'
export default function Footer() {
  return (
     <div className="wave-container">
      <Wave
        fill="#0f2027"
        paused={false}
        options={{
          height: 25,
          amplitude: 40,
          speed: 0.2,
          points: 13,
        }}
        className="wave wave-1"
      />

      <Wave
        fill="#203a43"
        paused={false}
        options={{
          height:20,
          amplitude: 25,
          speed: 0.3,
          points: 15
        }}
        className="wave wave-2"
      />
    </div>
  )
}
