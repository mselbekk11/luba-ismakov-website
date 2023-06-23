import React from 'react'
import Luba from './assets/luba.png'
import Linkedin from './assets/linkedin.svg'
import Email from './assets/email.svg'
import Youtube from './assets/youtube.svg'

function card() {
  return (
    <div className="container">
      <div className="left-side">
        <h1 className="luba">Luba Ismakov</h1>
        <h2>SSales Director, EMEA</h2>
        <div className="icon-container">

        <a href='https://www.linkedin.com/in/lubaismakov/' target='blank'><img src={Linkedin} alt='Linkedin Icon'/></a>
        <a href='mailto:luba.ismakov@gmail.com' target='blank'><img src={Email} alt='Linkedin Icon'/></a>
        <a href='https://www.youtube.com/watch?v=Y4_E0HOeCY0&t=126s' target='blank'><img src={Youtube} alt='Linkedin Icon'/></a>
        
        </div>
      </div>
      <div className="right-side">
        <img src={Luba} alt='Luba Ismakov Speaking'/>
      </div>
    </div>
  )
}

export default card