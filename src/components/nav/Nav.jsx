import React from 'react'
import "./nav.css"

 
 const Nav = () => {
   const categories = [
     {
       name: 'portfolio',
       description: "past projects that I've made"
     },
     {
       name: 'resume',
       description: " a summary of my work experience and background "
     }
   ]

   function categorySelected(name) {
    console.log(`${name} clicked`)
  }
   return (
     <div>
       <nav className='navbar'>
       <h1>Hi!</h1>
         <ul>
           <li><a href="#home">HOME</a></li>
           <li><a href="#about">ABOUT</a></li>
           <li><a href="#contact">CONTACT</a></li>
           {categories.map((category) => (
             <li
             className='mx-1'
             key={category.name}
             >
               <span onClick={() => categorySelected(category.name)}>
                 {category.name}
               </span>
             </li>
           ))}
           
         </ul>
       </nav>

     </div>
   )
 }
 






export default Nav