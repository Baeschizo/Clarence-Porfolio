
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar-links" aria-label="Main navigation">
       <Link to="/">Home</Link>
<a href="#about">About</a>
<a href="/work#projects">Projects</a>
<a href="/work#contact">Contact</a>
      </nav>

     <a href="/work#contact" className="navbar-contact">
  Let's Talk ↗
</a>
    </header>
  );
}

export default Navbar;
