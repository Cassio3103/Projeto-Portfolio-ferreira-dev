import "../styles/navBar.css"
import Logo from './Logo';

export function Navbar() {
  return (
    <nav className="navbar"> 
    <Logo />
    
    <ul> 
      <li> <a href="#sobre">Sobre mim</a> </li> 
      <li> <a href="#tecnologias">Tecnologias</a> </li>
      <li> <a href="#projetos">Projetos</a> </li> 
      <li> <a href="#contato">Contato</a> </li> 
    </ul> 
      
    </nav>
  );
}