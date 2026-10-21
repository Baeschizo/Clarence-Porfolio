
import "./ProjectDetails.css";
import { Link } from "react-router-dom";

type ProjectDetailsProps = {
  title: string;
  description: string;
  image: string;
  technologies: string;
  status: string;
  overview: string;
  features: string[];
  github: string;
  liveDemo: string;
};

function ProjectDetails({
  title,
  description,
  image,
  technologies,
  status,
  overview,
  features,
  github,
  liveDemo,
}: ProjectDetailsProps) {
  return (
    <section className="project-details">
      <div className="project-header-top">
  <Link to="/work" className="back-button">
    ← View Projects
  </Link>

  <span
    className={`project-status ${
      status === "In Development" ? "status-development" : "status-completed"
    }`}
  >
    <span className="status-dot"></span>
    {status}
  </span>
</div>
      <h1>{title}</h1>
      <p>{description}</p>

      <img src={image} alt={`${title} preview`} />

      <div className="project-overview">
        <h2>Project Overview</h2>
        <p>{overview}</p>
      </div>

      <div className="project-features">
        <h2>Key Features</h2>

        <ul>
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="project-technologies">
        <h2>Technologies Used</h2>
        <p>{technologies}</p>
      </div>

      <div className="project-links">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            View GitHub ↗
          </a>
        )}

        {liveDemo && (
          <a href={liveDemo} target="_blank" rel="noopener noreferrer">
            Live Demo ↗
          </a>
        )}
      </div>
    </section>
  );
}

export default ProjectDetails;
