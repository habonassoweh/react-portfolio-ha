import Contact from "./components/contact/Contact"
import Nav from "./components/nav/Nav";
import Bio from "./components/bio/Bio";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";


const App = () => {
  return( 
  <div>
    <Nav/>
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