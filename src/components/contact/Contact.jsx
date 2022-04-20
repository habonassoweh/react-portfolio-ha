import React from 'react'
import "./contact.css"


const Contact = () => {
  return (
    <div className="contact">
        <div className="contact-bg"></div>
        <div className="contact-wrapper">
            <div className="contact-left">
                <h1 className="contact-title">Contact Us</h1>
                <form >
                    <div className='contact-div'>
                    <input type="text" placeholder="Name" name="user_name" />
                    <input type="text" placeholder="Subject" name="user_subject" />   
                    <input type="text" placeholder="Email" name="user_name" />
                    </div>

                    <textarea rows="5" placeholder='Message' name='message'></textarea>
                    <button>Submit</button>
                </form>
                
            </div>
        
        </div>
    </div>
  )
}

export default Contact