import "./About.css";

const skills = [
  "Python",
  "JavaScript",
  "TypeScript",
  "C++",
  "React",
  "Next.js",
  "HTML & CSS",
  "Flask",
  "SQLite",
  "PostgreSQL",
  "Prisma",
  "Supabase",
  "Firebase",
  "Git",
  "GitHub",
  "Vercel",
];

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>

      <p>
        I'm a Computer Science student and full-stack developer with hands-on
        experience building e-commerce platforms, database-driven systems,
        and responsive web applications. I also explore artificial
        intelligence and robotics.
      </p>

      <div className="about-skills">
        <h3>Technical Skills</h3>

        <div className="skills-list">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
