
import "./Hero.css";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";



const techGroups = [
  {
    label: "PROGRAMMING",
    items: [
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "C++", icon: "devicon-cplusplus-plain colored" },
    ],
  },
  {
    label: "FRONTEND",
    items: [
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Next.js", icon: "devicon-nextjs-original" },
      { name: "HTML5", icon: "devicon-html5-plain colored" },
      { name: "CSS3", icon: "devicon-css3-plain colored" },
    ],
  },
  {
    label: "BACKEND & DATABASES",
    items: [
      { name: "Flask", icon: "devicon-flask-original" },
      { name: "Prisma", icon: "devicon-prisma-original" },
      { name: "SQLite", icon: "devicon-sqlite-plain colored" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "Supabase", icon: "devicon-supabase-plain colored" },
    ],
  },
  {
    label: "DEVELOPER TOOLS",
    items: [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "Vercel", icon: "devicon-vercel-original" },
    ],
  },
];

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
  View My Work <FiArrowUpRight size={16} />
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
  <div className="hero-tech-groups">
    {techGroups.map((group) => (
      <div className="hero-tech-group" key={group.label}>
        <p className="hero-tech-group-label">{group.label}</p>
        <div className="hero-tech-list">
          {group.items.map((tech) => (
            <span className="tech-item" key={tech.name}>
              <i className={tech.icon} aria-hidden="true" />
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>


      </div>
     <div className="hero-visual">
  <img
    src="/images/hero-laptop.png"
    alt="AI and Robotics laptop visual"
  />
</div>

<footer className="hero-footer">
  <div className="hero-footer-line"></div>

  <div className="hero-socials">
    <a
      href="https://github.com/Baeschizo"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
    >
      <FaGithub />
    </a>

    <a
      href="https://www.linkedin.com/in/clarence-jaranilla-370316273"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <FaLinkedin />
    </a>

    <a
      href="https://www.facebook.com/clarence.jaranilla.33"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
    >
      <FaFacebook />
    </a>
  </div>
</footer>

    </section>
  );
}

export default Hero;
