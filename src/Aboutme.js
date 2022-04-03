import React from 'react'

function Aboutme() {
  return (
    <div className='aboutmeBox'>
        <p className='aboutHeading'>About Me</p>
        <div className='hrLine'></div>
        <p className='aboutmePara'>I'm a web designer & front-end developer with 6 months of professional experience. I'm interested in all kinds of visual 
            communication, but my major focus is on designing web, mobile & tablet interfaces. I also have skills in other fields like 
             web development.
        </p>
        <p className='aboutmePara'>I enjoy turning complex problems into simple, beautiful and intuitive designs. When I'm not pushing pixels, you'll find me cooking,
             gardening, listining music or working out in the park.</p>

        <div className='bocofLang'>
            <p className='aboutmeSecondHeading'>Languages/Library/Technology</p>
            <div>
                <span>  <img src='/Images/html.jpg' className='logos' alt='htmllogo'></img>    </span>
                <span>  <img src='/Images/css.png' className='logos' alt='csslogo'></img>    </span>
                <span>  <img src='/Images/js.png' className='logos' alt='jslogo'></img>    </span>
                <span>  <img src='/Images/boot.png' className='logos' alt='bootlogo'></img>    </span>
                <span>  <img src='/Images/react.png' className='logos' alt='reactlogo'></img>    </span>
                <span>  <img src='/Images/git.png' className='logos' alt='gitlogo'></img>    </span>
            </div>
        </div>

    </div>
  )
}

export default Aboutme