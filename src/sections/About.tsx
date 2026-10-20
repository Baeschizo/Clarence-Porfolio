import "./About.css";
function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>

      <p>
        I'm an aspiring software engineer passionate
        about building modern applications and exploring
        artificial intelligence and robotics.
      </p>
      <div className="about-skills">
  <h3>Technical Skills</h3>

  <div className="skills-list">
    <span>Python</span>
    <span>React</span>
    <span>TypeScript</span>
    <span>HTML & CSS</span>
    <span>SQLite</span>
    <span>Flask</span>
  </div>
</div>
    </section>
  );
}

export default About;