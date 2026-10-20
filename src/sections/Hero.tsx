
import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-label">
          SOFTWARE DEVELOPMENT · AI · ROBOTICS
        </p>

        <h1 className="hero-title">
          Clarence Jaranilla
        </h1>
        <p className="hero-description">
  I build modern web applications and explore
  artificial intelligence and robotics to create
  meaningful real-world solutions.
</p>

     
        <div className="hero-actions">
  <Link to="/work" className="hero-button-primary">
    View My Work ↗
  </Link>

 <a
  href="/Jaranilla_Clarence_cv.pdf"
  download="Jaranilla_Clarence_cv.pdf"
  className="hero-button-secondary"
>
  Download CV ↓
</a>
</div>
<div className="hero-tech">
  <p className="hero-tech-label">TECH I USE</p>

  <div className="hero-tech-list">
    <span>Python</span>
    <span>React</span>
    <span>TypeScript</span>
    <span>Flask</span>
    <span>SQLite</span>
  </div>
</div>


      </div>
     <div className="hero-visual">
  <img
    src="/images/hero-laptop.png"
    alt="AI and Robotics laptop visual"
  />
</div>
    </section>
  );
}

export default Hero;
