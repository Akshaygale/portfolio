import React from 'react'

function Resume() {
  return (
    <div className='resumeBox'>
    <div>
        <p className='resumeHeading'>My Resume</p>
        <div className='hrline2'></div>

        <p className='title'>Education</p>
        <div className='eductionundeline'/>

        <div className='linewithcircle'>
          <p className='circle'/>
          <p className='clgDetails'>Rashtrasant Tukadoji Maharaj Nagpur University</p>
          <p className='yearpassout'>2016-2020</p>
          </div>
        <p className='infoEDU'>Bachelor of Engineering in Information Technology from Bapurao Deshmukh College of Engineering, Sevagarm. <i>  CGPA- 8.31</i></p>
   
        <div className='verticalLine'/>

        <div className='secondEdu linewithcircle '>
        <p className='circle'/>
        <p className='clgDetails'>Maharashtra State Board of Higher Secondary Education</p>
        <p className='sencondEndu2 yearpassout'>2015-2016</p>
        </div>
      <p className='infoEDU'>BDM Jr.college, Nagpur Divisional Board, Wardha. <i>  Percentile- 62.15</i></p>


      <div className='verticalLine'/>

      <div className='secondEdu linewithcircle '>
      <p className='circle'/>
      <p className='clgDetails'>Maharashtra State Board of  Secondary Education</p>
      <p className='sencondEndu3 yearpassout'>2013-2014</p>
      </div>
    <p className='infoEDU'>Bansilal Katariya High School, Nagpur Divisional Board, Hinganghat. <i>  Percentile- 78</i></p>

    <div className='verticalLine'/>
</div>
<div>
    <img className='resumepic' src='/Images/pic.jpg' alt='mypic'></img>

</div>
    </div>
  )
}

export default Resume