import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <Link href={project.href} className="project-card-link">
        <div className="project-card-image">
          <Image
            src={project.image}
            alt={`${project.title} project`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
            className="project-card-img"
          />
        </div>

        <div className="project-card-content m-t-2">
          <p className="eyebrow">
            {project.category}
          </p>

          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <span className="project-card-link-text">
            View case study →
          </span>
        </div>
      </Link>
    </article>
  );
}