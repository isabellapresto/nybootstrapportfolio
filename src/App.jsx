import "bootstrap/dist/css/bootstrap.min.css"; 
import Hero from "./Components/Hero/Hero";
import NavbarMenu from "./Components/NavbarMenu/NavbarMenu";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About"; 

import Footer from "./Components/Footer/Footer";
import "./App.css"
export default function App() {
  return (
    <div className="black-background">
      <NavbarMenu/>
      <Hero/>
      <About/>
      <div className="projects-container"> <Projects/></div>
      <Footer/>
    </div>
  )
}
