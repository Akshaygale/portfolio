import React from 'react'
import { Link } from 'react-router-dom'

function Portfolio() {
  return (
    <div className='portBox'>
        <p className='portHeading'>My Portfolio</p>
        <div className='hrdiv'></div>
        <div className='projectBOX'>
            <Link to='https://akshaygale.github.io/backtracking1.0/'>  <img src='/Images/backtracking.png' className='projectimage' alt='project1'></img>     </Link>
            <Link to='https://akshaygale.github.io/css-assignment-6/'>  <img src='/Images/cssproject.png' className='projectimage' alt='project2'></img>  </Link>
            <Link to='https://akshaygale.github.io/todo-app-ui-web/'>  <img src='/Images/todoweb.png' className='projectimage' alt='project3'></img>   </Link>
            <Link to='https://akshaygale.github.io/todo_app_js_project/'>  <img src='/Images/jsblog.png' className='projectimage' alt='project4'></img>   </Link>
            <Link to='https://akshaygale.github.io/clockproject1.0/'>  <img src='/Images/clock.png' className='projectimage' alt='project5'></img>  </Link>
            <Link to='https://silly-cori-6edc61.netlify.app/'>  <img src='/Images/reactblog.png' className='projectimage' alt='project6'></img>   </Link>
        </div>
    </div>
  )
}

export default Portfolio