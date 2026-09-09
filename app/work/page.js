import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";
import GitHubRepos from "../../components/GitHubRepos";

export default function Work() {
  return (
    <section className="section page-header">

      <div className="container">

        <p className="eyebrow">
          Portfolio
        </p>

        <h1>Selected projects</h1>

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

      <section className="github-section y-5">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Development</p>

            <h2>Explore my GitHub</h2>

            <p>
              A selection of recent development projects, experiments,
              and full-stack applications.
            </p>
          </div>

          <GitHubRepos />
        </div>
      </section>
    </section>
    
  );
}

function isActive(href) {
  if (href === "/work") {
    return pathname === "/work" || pathname.startsWith("/work/");
  }

  return pathname === href;
}