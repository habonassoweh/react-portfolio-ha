import React from 'react'
import "./bio.css"
import BioPic from "../../img/bio-image.png"

const About = () => {
  return (
    <div className='bio'>

     <div className="bio-left">
    <div className="bio-left-wrapper">

        <h2 className='bio-intro'>Hello, My name is </h2>
        <h1 className='bio-name'>Habon Assoweh</h1>

        <div className="bio-title">
            <div className="bio-title-wrapper">

                <div className="bio-title-item">Front End Web Developer</div>
                <div className="bio-title-item">UI/UX Designer</div>
                <div className="bio-title-item">Photographer</div>
                <div className="bio-title-item">Digital Marketing Specialist</div>


            </div>
        </div>

        <p className="bio-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum omnis molestiae, vitae deserunt nihil unde temporibus libero recusandae provident iure?</p>
        
    </div>
    
    </div>  

     <div className="bio-right">
       <div className="bio-bg "></div>
       <img src={BioPic} alt="" className="bio-img" />
      
      </div> 

    </div>
  )
}

export default About 