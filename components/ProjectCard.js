import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">

      <div className="project-image">
        <span>{project.category}</span>
      </div>

      <div className="project-content">

        <p className="project-category">
          {project.category}
        </p>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="tags">
          {project.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>

        <Link
          href={`/work/${project.slug}`}
          className="text-link"
        >
          View case study →
        </Link>

      </div>

    </article>
  );
}