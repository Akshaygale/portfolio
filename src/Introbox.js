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




// import React, { Component } from 'react'
// import jsPDF from 'jspdf';
// import res from '../src/Images/imageRes.png'

// export class Introbox extends Component {
//   pdfdownload=()=>{
//     var doc=new jsPDF('landscape', 'px', 'a4', 'false');
//     doc.addImage(res,'PNG','70', '25', '500', '400')
//   }

//   render() {
//     return (
//       <div className='introbox'>
//       <div className='introboxName'>Hello, my name is <strong><i>Akshay Gale</i></strong></div>
//       <div className='introboxProfile'>I'm a Front-end Developer</div>
//       <div className='introboxDetails'>Get ready to turn ideas into reality</div>
//       <button className='hiremeButton'>Hire ME</button>
//       <button className='getresumeButton' onClick={this.pdfdownload}>Get Resume</button>
//       <img className='mypic' src='/Images/pic.jpg' alt='mypic'></img>
//   </div>
//     )
//   }
// }

// export default Introbox