import React from 'react'
import { Link } from 'react-router-dom'
import "./Style.css"

function Header() {
  return (
    <div className='headerBox'>
        <span className='headerHeading'>Akshay Gale</span>
        <span className='headerOption'>
          <Link to='home' className='linktodetails'> <span className='headeroptionList'>Home</span> </Link>
          <Link to='about'  className='linktodetails'> <span className='headeroptionList'>About</span>  </Link>
          <Link to='portfolio'  className='linktodetails'> <span className='headeroptionList'>Portfolio</span>  </Link>
          <Link to='resume' className='linktodetails'> <span className='headeroptionList'>Resume</span> </Link>
          <Link to='contact'  className='linktodetails'> <span className='headeroptionList'>Contact</span>  </Link>
        </span>
    </div>
  )
}

export default Header