import React from 'react'

import "./contact.css"


const Contact = () => {
 
  return (
    <div className="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Let's Chat</h1>
          <div className="contact-info">
            <div className="contact-info-item">
              {/* <img src="/img/contact-image.jpg" alt="" className='contact-img'/> */}
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className='contact-des'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id pariatur 
            laudantium corporis, provident dolorum excepturi.
          </p>
         
           <input type="text" placeholder='Name' name="user_name" />
           <input type="text" placeholder='Email' name="user_email" />
           <textarea placeholder="Message" rows="10" name="message" ></textarea>
           <button>Submit</button>

          
        </div>
      </div>
       

           
    </div>
  )
}

export default Contact