import React,{useEffect} from 'react'
import { capitalizeFirstLetter } from '../../utils/helpers'
import "./nav.css"

 

 const Nav = (props) => {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
  } = props;

   useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);
  
   return (
     <div>
       <nav className='navbar' 
          categories={categories}
          setcurrentcategory={setCurrentCategory}
          currentcategory={currentCategory}
          contactselected={contactSelected}
          setcontactselected={setContactSelected}
       >
       <h1>Hi!</h1>
         <ul>
           <li><a href="#home">HOME</a></li>
           <li><a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>ABOUT</a></li>
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