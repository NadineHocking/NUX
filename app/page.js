import Link from "next/link";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container d-flex">
            <div className=" flex-column align-items-start justify-content-start text-md-start">
            <p className="eyebrow">
              Nadine Hocking: Product Designer & UI Engineer
            </p>

            <h1>
            {/* Transforming complex problems into intuitive digital products.             */}
            {/* I research, design and build digital products */}
            Bridging the gap between product strategy, design and development
            </h1>

            <p className="hero-intro">
              I combine UX research, product design, and frontend engineering to create thoughtful, intuitive digital experiences — from understanding the problem and shaping the experience to designing and building the final product.
            </p>

            <div className="hero-actions">
              <Button href="/work" icon="arrow">
                View my work
              </Button>

              <Button
                href="/contact"
                variant="secondary"
                icon="mail"
              >
                Get in touch
              </Button>
              </div>
              
          </div>


        </div>
      </section>


      {/* WORK */}

      <section className="section">

        <div className="container">

          <div className="section-intro">

            <p className="eyebrow">
              Selected work
            </p>

            <h2>
              Products, interfaces
              <br />
              and experiences.
            </h2>

          </div>

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


      {/* DESIGN + DEVELOPMENT */}

      <section className="section section-dark">

        <div className="container">

          <p className="eyebrow">
            Design <span className="accent">+</span> development
          </p>

          <h2>
            From idea to
            <br />
            interface to code.
          </h2>

          <div className="process-grid">

            <div>
              <span>01</span>
              <h3>Understand</h3>
              <p>
                Research, user needs, business goals
                and product strategy.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Design</h3>
              <p>
                Information architecture, interaction
                design, UI and prototyping.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Build</h3>
              <p>
                React, Next.js and modern frontend
                development.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ABOUT */}

      <section className="section">

        <div className="container about-preview">

          <div>
            <p className="eyebrow">About</p>

            <h2>
              A designer who
              <br />
              understands code.
            </h2>
          </div>

          <div>

            <p className="about-text">
              I help teams bridge the gap between product strategy, design and development, from understanding the problem to designing and building the solution.
            </p>

            <Link
              href="/about"
              className="text-link"
            >
              More about me →
            </Link>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="cta section-dark">

        <div className="container">

          <p className="eyebrow">
            Have a project?
          </p>

          <h2>
            Let's build something
            <br />
            useful.
          </h2>

          <Link
            href="/contact"
            className="button button-primary"
          >
            Get in touch
          </Link>

        </div>

      </section>
    </>
  );
}