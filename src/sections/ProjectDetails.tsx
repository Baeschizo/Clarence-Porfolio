import "./ProjectDetails.css";
import { Link } from "react-router-dom";

type ProjectDetailsProps = {
  title: string;
  description: string;
  image: string;
  technologies: string;
};

function ProjectDetails({
  title,
  description,
  image,
  technologies,
}: ProjectDetailsProps) {
  return (
    <section className="project-details">
      <Link to="/work" className="back-button">
  ← View Projects
</Link>
      <h1>{title}</h1>
      <p>Explore the details of this project.</p>
      <p>{description}</p>

      <img src={image} alt={`${title} preview`} />

<div className="project-overview">
  <h2>Project Overview</h2>
  <p>
    {title === "Smart Finance Tracker"
      ? "A personal finance application designed to help users manage income, track expenses, and understand their spending habits."
      : "A luxury fragrance e-commerce platform designed to provide a seamless shopping experience with product browsing, inventory management, and order processing."}
  </p>
</div>
<div className="project-features">
  <h2>Key Features</h2>

  <ul>
    {title === "Smart Finance Tracker" ? (
      <>
        <li>Income & Expense Tracking</li>
        <li>Personal Finance Dashboard</li>
        <li>Transaction Management</li>
        <li>Budget Monitoring</li>
      </>
    ) : (
      <>
        <li>Product Catalog & Browsing</li>
        <li>Inventory Management</li>
        <li>Order Management</li>
        <li>Admin Dashboard</li>
      </>
    )}
  </ul>
</div>
      <h2>Technologies Used</h2>
      <p>{technologies}</p>
    </section>
  );
}

export default ProjectDetails;
