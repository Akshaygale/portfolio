import React from 'react'


function Contact() {
  return (
    <div className='contact'>
        <p className='contactTExt'> Contact Me</p>
        <div className='underline'></div>
        <div className='bosex'>
          <div className='contactBOX'>
              <p className='connectWord'>Let's Connect</p>
              <p>Connect with me if you have any job opportunity for me as Frontend developer.</p>
              <div>
                  <i class="fa-solid fa-envelope"></i>
                  <span>akshaygale19@gmail.com</span>
              </div>
              <div>
                  <i class="fa-solid fa-phone"></i>
                  <span>+91-7385423874</span>
              </div>
              <div>
                  <i class="fa-solid fa-location-dot"></i>
                  <span>Hinganghat, Wardha, Maharashtra</span>
              </div>
          </div>
    
    
          <div className='formBox'>
              <p className='formText'>Send me a message</p>
              <form>
                  <label for='name' className='textName'>First & Lats Name</label><br/>
                  <input type='text' name='name' id='name' className='textBox' ></input><br/>

                  <label for='number' className='textName'>Phone Number</label><br/>
                  <input type='number' name='number' id='number' className='textBox' ></input><br/>

                  <label for='email' className='textName'>Email</label><br/>
                  <input type='email' name='emai' id='email'  className='textBox'></input><br/>

                  <label for='message' className='textName'>Message</label><br/>
                  <input type='text' required name='message' id='message' className='messageBox' ></input>
              </form>
              <button className='sendButton'>Send Message</button>
          </div>
        </div>
    </div>
  )
}

export default Contact