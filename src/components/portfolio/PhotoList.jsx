import React, {useState} from 'react'

import photo from '../../images/1.png';


function PhotoList() {
    const [photos] = useState([{
        name:"project 1",
        category:"portfolio",
        describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ullam."
    },
    {
        name:"project 2",
        category:"portfolio",
        describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ullam."
    },
    {
        name:"project 3",
        category:"portfolio",
        describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ullam."
    },
    {
        name:"project 4",
        category:"portfolio",
        describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ullam."
    },
    {
        name:"project 5",
        category:"portfolio",
        describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ullam."
    },
    {
        name:"project 6",
        category:"portfolio",
        describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ullam."
    }])
    return (
      <div>
          <div className='flex-row'>
              {photos.map((image, i) => (
                  <img
                  src={require(`../../images/${category}/${i}.jpg`).default}
                  alt={image.name}
                  className="img-thumbnail mx-1"
                  key={image.name}
                  />
              ))}
          </div>
          <img
            src={photo}
            alt="Portfolio Example"
          />
      </div>
    )
  }
  
  export default PhotoList;