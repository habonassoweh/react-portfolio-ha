import "./about.css"



import React from 'react'

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card"></div>
        <div className="about-card">
          <img src="/images/about-image.jpg" alt="" className="about-img" />
        </div>
      </div>      
      <div className="about-right"></div>
    </div>
  )
}

export default About