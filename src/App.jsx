import React, { useState } from 'react';
import Contact from "./components/contact/Contact"
import Nav from "./components/nav/Nav";
import Bio from "./components/bio/Bio";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";


const App = () => {
  const [categories] =useState([
    {
      name: ' portfolio ',
      description: "past projects that I've made"
    },
    {
      name: ' resume ',
      description: " a summary of my work experience and background "
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return( 
  <div>
    <Nav
    categories={categories}
    setCurrentCategory={setCurrentCategory}
    currentCategory={currentCategory} />
    <main>
    <Bio/>
    <About/>
    <Portfolio/>
    </main>
    <Contact/>
    <Footer/>

    
    
    
    </div>
  );
};

export default App;