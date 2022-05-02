import React, { useState } from 'react';

import "./contact.css"

function Contact() {
  const { name, email, message } = formState;
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  function handleChange(e) {
    setFormState({...formState, [e.target.name]: e.target.value })
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }
  console.log(formState);

  // JSX
  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" defaultValue={name} onChange={handleChange} name="name" />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" defaultValue={email} name="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
    );
  }

// const Contact = () => {
 
//   return (
//     <div className="contact">
//       <div className="contact-bg"></div>
//       <div className="contact-wrapper">
//         <div className="contact-left">
//           <h1 className="contact-title">Let's Chat</h1>
//           <div className="contact-info">
//             <div className="contact-info-item">
//               {/* <img src="/img/contact-image.jpg" alt="" className='contact-img'/> */}
//             </div>
//           </div>
//         </div>
//         <div className="contact-right">
//           <p className='contact-des'>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id pariatur 
//             laudantium corporis, provident dolorum excepturi.
//           </p>
         
//            <input type="text" placeholder='Name' name="user_name" />
//            <input type="text" placeholder='Email' name="user_email" />
//            <textarea placeholder="Message" rows="10" name="message" ></textarea>
//            <button>Submit</button>

          
//         </div>
//       </div>
       

           
//     </div>
//   )
// }

export default Contact