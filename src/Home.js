import React from 'react'
import Aboutme from './Aboutme'
import Contact from './Contact'
import Header from './Header'
import Introbox from './Introbox'
import Portfolio from './Portfolio'
import Resume from './Resume'

function Home() {
  return (
      <div>
            <Introbox/>
            <Aboutme/>
            <Portfolio/>
            <Resume/>
            <Contact/>

        </div>
  )
}

export default Home