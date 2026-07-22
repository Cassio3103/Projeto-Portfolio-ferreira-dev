import { Navbar } from "./components/NavBar";
import Hero from "./components/Hero";
import Skills from './components/Skills'; 
import Projects2 from "./components/Projects2";
import Contact from "./components/Contact";
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <Home />
        <Hero />
        <Skills /> 
        <Projects2 />
        <Contact />
      </main>

      <footer>
        <p>&copy; 2026 Criado por Cássio Felipe Paiva Ferreira da Silva</p>
      </footer>
    </div>
  );
}

export default App;