import React from 'react';



function Modal ({currentPhoto}){
    // const [isModalOpen, setIsModalOpen] = useState(false);
    const {name, category, description, index} = currentPhoto;
    return(
        <div className="modalBackdrop">
        <div className="modalContainer">
          <h3 className="modalTitle">{name}</h3>
          <img src={require(`../../images/${category}/${index}.png`)} alt="current category" />
          <p>
            {description}
          </p>
          <button type="button">
            Close this modal
          </button>
        </div>
      </div> 
    )
}
  
  export default Modal;