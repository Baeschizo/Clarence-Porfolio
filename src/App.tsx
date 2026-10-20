
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import { Routes, Route } from "react-router-dom";
import ProjectDetails from "./sections/ProjectDetails";
import { projects } from "./data/projects";
import Contact from "./sections/Contact";
import About from "./sections/About";
import ThemeToggle from "./components/ThemeToggle";


function App() {
  return (
    <>
        <ThemeToggle />
    <Routes>
      <Route
  path="/"
  element={<Hero />}
/>

<Route
  path="/work"
  element={
    <>
      <Navbar />
      <main>
        <About/>
        <Projects />
        <Contact />
      </main>
    </>
  }
/>
      {projects.map((project) => (
        <Route
          key={project.id}
          path={`/projects/${project.slug}`}
          element={
            <ProjectDetails
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
            />
          }
        />
      ))}
    </Routes>
    </>
  );
}


export default App;
