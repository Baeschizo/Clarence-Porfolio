import "./Projects.css";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="projects">
      <p>FEATURED PROJECTS</p>
      <h2>Selected Work.</h2>
      
<div className="projects-grid">
  
{projects.map((project) => (
  <ProjectCard
    key={project.id}
    title={project.title}
    description={project.description}
    category={project.category}
    technologies={project.technologies}
    image={project.image}
    slug={project.slug}
    status={project.status}
  />
))}


</div>

    </section>
  );
}

export default Projects;