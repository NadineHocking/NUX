import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";

export default function Work() {
  return (
    <section className="section page-header">

      <div className="container">

        <p className="eyebrow">
          Portfolio
        </p>

        <h1>Selected work</h1>

        <p className="page-intro">
          A selection of product design, UX and
          frontend development projects.
        </p>

        <div className="project-grid">

          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

function isActive(href) {
  if (href === "/work") {
    return pathname === "/work" || pathname.startsWith("/work/");
  }

  return pathname === href;
}