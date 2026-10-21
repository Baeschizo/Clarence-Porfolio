
import "./ProjectCard.css";
import { Link } from "react-router-dom";

type ProjectCardProps = {
  title: string;
  description: string;
  category: string;
  technologies: string;
  image: string;
  slug: string;
  status: string;
};

function ProjectCard({
  title,
  description,
  category,
  technologies,
  image,
  slug,
  status,
}: ProjectCardProps) {
  const isCompleted = status === "Completed";

  return (
    <Link
      to={`/projects/${slug}`}
      className="project-card"
    >
      <div className="project-card-image">
        <img src={image} alt={`${title} preview`} />
      </div>

      <p className="project-card-category">{category}</p>

      <h3 className="project-card-title">{title}</h3>

      <p className="project-card-description">
        {description}
      </p>

      <p className="project-card-technologies">
        {technologies}
      </p>

      <div className="project-card-footer">
        <span
          className={`project-card-status ${
            isCompleted ? "completed" : "in-progress"
          }`}
        >
          <span className="status-dot"></span>
          {isCompleted ? "Completed" : "In Development"}
        </span>
      </div>
    </Link>
  );
}

export default ProjectCard;
