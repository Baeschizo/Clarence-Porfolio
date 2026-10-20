import "./ProjectCard.css";
import { Link } from "react-router-dom";

type ProjectCardProps = {
  title: string;
  description: string;
  category: string;
  technologies: string;
  image: string;
  slug: string;
};

function ProjectCard({
  title,
  description,
  category,
  technologies,
  image,
  slug,
}: ProjectCardProps) {
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
    </Link>
  );
}

export default ProjectCard;
