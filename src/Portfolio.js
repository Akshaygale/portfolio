import React from 'react'
import { ExternalLink } from 'react-external-link'

function Portfolio() {
  return (
    <div className='portBox'>
        <p className='portHeading'>My Portfolio</p>
        <div className='hrdiv'></div>
        <div className='projectBOX'>
            <ExternalLink href='https://akshaygale.github.io/backtracking1.0/'><img src='/Images/backtracking.png' className='projectimage' alt='project1'></img> </ExternalLink>
            <ExternalLink href='https://akshaygale.github.io/css-assignment-6/'>  <img src='/Images/cssproject.png' className='projectimage' alt='project2'></img>  </ExternalLink>
            <ExternalLink href='https://akshaygale.github.io/todo-app-ui-web/'> <img src='/Images/todoweb.png' className='projectimage' alt='project3'></img> </ExternalLink>
            <ExternalLink href='https://akshaygale.github.io/todo_app_js_project/'> <img src='/Images/jsblog.png' className='projectimage' alt='project4'></img> </ExternalLink>
            <ExternalLink href='https://akshaygale.github.io/clockproject1.0/'> <img src='/Images/clock.png' className='projectimage' alt='project5'></img>  </ExternalLink>
            <ExternalLink href='https://silly-cori-6edc61.netlify.app/'>  <img src='/Images/reactblog.png' className='projectimage' alt='project6'></img>   </ExternalLink>

        </div>
    </div>
  )
}

export default Portfolio