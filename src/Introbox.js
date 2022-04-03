import React from 'react'
import { Link } from 'react-router-dom'

function Introbox() {
  return (
    <div className='introbox'>
        <div className='introboxName'>Hello, my name is <strong><i>Akshay Gale</i></strong></div>
        <div className='introboxProfile'>I'm a Front-end Developer</div>
        <div className='introboxDetails'>Get ready to turn ideas into reality</div>
        <button className='hiremeButton'>Hire ME</button>
        <button className='getresumeButton'> <Link className='resumeLink' to=''>Get Resume</Link></button>
        <img className='mypic' src='/Images/pic.jpg' alt='mypic'></img>
    </div>
  )
}

export default Introbox