import React from 'react';



function Modal ({onClose, currentPhoto}){
    // const [isModalOpen, setIsModalOpen] = useState(false);
    const {name, description, variable} = currentPhoto;
    return(
        <div className="modalBackdrop">
        <div className="modalContainer">
          <h3 className="modalTitle">{name}</h3>
          <img src={(`${variable}`)} alt="current category" />
          <p>
            {description}
          </p>
          <button onClick={onClose} type="button">
            Close this modal
          </button>
        </div>
      </div> 
    )
}
  
  export default Modal;