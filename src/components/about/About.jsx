import React from 'react'
import "./about.css"
import aboutPic from "../../img/about-image.jpg"

const About = () => {
  return (

    <div className='about' id='#home'>
        <div className="about-left">
            <div className="about-card bg"></div>
            <div className="about-card">
                <img src={aboutPic} alt="" className="about-img" />
            </div>
        </div>
        <div className="about-right">
            <h1 className='about-title'id="what-we-do" >About Me</h1>
            <p className="about-subtitle">
           
I help designers, small agencies and businesses bring their ideas to life. Powered by Figma, VS Code and chocolate, I turn your requirements into CMS-ified and ecommerce-ified websites - on time and on budget.
            </p>

            <p className='about-des'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatem facere voluptas ratione cum soluta.
                Porro temporibus modi quaerat voluptatem voluptatum qui repudiandae, id, nostrum consequatur laboriosam maiores 
                dolorem doloribus cum magni consequuntur error cupiditate sapiente autem culpa illo blanditiis?
            </p>
        </div>
    </div>
  )
}

export default About