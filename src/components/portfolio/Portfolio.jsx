import React from 'react'
import "./portfolio.css"
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../images/1.png"


export const Portfolio = () => {

  function Port (props) {
    const currentCategory = {
      name: "portfolio",
      description: "past projects that I've made"

    }
    return(
      <section>
        <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
        <p>{currentCategory.name}</p>
        <div className='flex-row'>
          <img
          src={photo}
          alt="Portfolio Example"
          className='img-thumbnail mx-1'
          />
        </div>
      </section>
    );
  };

 
}

export default Portfolio