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
        describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ullam.",
        variable: clouds
    },
    {
        name:"project 2",
        category:"images",
        describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ullam.",
        variable: sparkly
    },
    {
        name:"project 3",
        category:"portfolio",
        describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ullam.",
        variable: greencloud
    },
    {
        name:"project 4",
        category:"portfolio",
        describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ullam.",
        variable: bluecloud
    },
    {
        name:"project 5",
        category:"portfolio",
        describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ullam.",
        variable: pastel
    },
    {
        name:"project 6",
        category:"portfolio",
        describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ullam.",
        variable: pinkcloud
    }])
    const toggleModal = (image, i) => {
        setCurrentPhoto({...image, index: i})
        setIsModalOpen(true);
      }
    return (
      <div>
          {isModalOpen && <Modal currentPhoto={currentPhoto} />}
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
          <img
            src={clouds}
            alt="Portfolio Example"
          />
      </div>
    )
  }
  
  export default PhotoList;