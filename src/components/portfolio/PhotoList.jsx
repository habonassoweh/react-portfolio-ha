import React, {useState} from 'react'
import Modal from '../modal/Modal';

import clouds from '../../images/1.png';

import sparkly from '../../images/2.png';

import greencloud from '../../images/3.png';

import bluecloud from '../../images/4.png';

import pastel from '../../images/5.png';

import pinkcloud from '../../images/6.png';


function PhotoList() {
    const [currentPhoto, setCurrentPhoto] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [photos] = useState([{
        name:"project 1",
        category:"images",
        description: "An image of purple clouds",
        variable: clouds
    },
    {
        name:"project 2",
        category:"images",
        description: "An image of a galactic blue sky.",
        variable: sparkly
    },
    {
        name:"project 3",
        category:"portfolio",
        description: "An image of light green/orange clouds",
        variable: greencloud
    },
    {
        name:"project 4",
        category:"portfolio",
        description: "An image of blue clouds",
        variable: bluecloud
    },
    {
        name:"project 5",
        category:"portfolio",
        description: "An image of pastel clouds.",
        variable: pastel
    },
    {
        name:"project 6",
        category:"portfolio",
        description: "An image of pink clouds.",
        variable: pinkcloud
    }])
    const toggleModal = (image, i) => {
        setCurrentPhoto({...image, index: i})
        setIsModalOpen(!isModalOpen);
      }
    return (
      <div>
          {isModalOpen && <Modal currentPhoto={currentPhoto} onClose={toggleModal}/>}
          <div className='flex-row'>
              {photos.map((image, i) => (
                  <img
                  src={image.variable}

                  alt={image.name}
                  className="img-thumbnail mx-1"
                  onClick={() => toggleModal(image, i)}
                  key={image.name}
                  />
              ))}
          </div>
         
      </div>
    )
  }
  
  export default PhotoList;