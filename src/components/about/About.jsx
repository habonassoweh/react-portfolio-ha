import React from 'react'
import "./about.css"

const About = () => {
  return (

    <div className='about'>
        <div className="about-left">
            <div className="about-card bg"></div>
            <div className="about-card">
                <img src="/images/image.jpeg" alt="" className="about-img" />
            </div>
        </div>
        <div className="about-right">
            <h1 className='about-title'>About Me</h1>
            <p className="about-subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quod ullam. Nobis veniam aliquam,
                a aut sed minima necessitatibus sapiente.
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