import React from 'react'
import "./nav.css"

 
 const Nav = () => {
   return (
     <div>
       <nav className='navbar'>
       <h1>Hi!</h1>
         <ul>
           <li><a href="#home">HOME</a></li>
           <li><a href="#about">ABOUT</a></li>
           <li><a href="#portfolio">PORTFOLIO</a></li>
           <li><a href="#contact">CONTACT</a></li>
         </ul>
       </nav>

     </div>
   )
 }
 






export default Nav