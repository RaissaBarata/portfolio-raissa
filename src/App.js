import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skill from "./components/Skill/skill";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Techs from "./components/Techs/techs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Techs />
      <Skill />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
