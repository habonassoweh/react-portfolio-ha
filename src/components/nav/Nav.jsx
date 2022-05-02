import React,{useEffect} from 'react'
import { capitalizeFirstLetter } from '../../utils/helpers'
import "./nav.css"

 

 const Nav = (props) => {

   const{
     categories =[],
     setCurrentCategory,
     currentCategory,
   } =props;

   useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);
  
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
             className={`mx-1 ${
               currentCategory.name === category.name && 'navActive'
             }`}
             key={category.name}
             >
               <span onClick={() => {
                 setCurrentCategory(category)
               }}
               >
                 {capitalizeFirstLetter(category.name)}
               </span>
             </li>
           ))}
           
         </ul>
       </nav>

     </div>
   )
 }
 






export default Nav