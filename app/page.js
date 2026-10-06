import Link from "next/link";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";
import { FiArrowLeft, FiArrowRight, FiExternalLink } from "react-icons/fi";


export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container d-flex">
            <div className=" flex-column align-items-start justify-content-start text-md-start">
            <p className="eyebrow">Product Designer & UI Engineer   
            </p>

            <h1>
            {/* Transforming complex problems into intuitive digital products. */}
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

      <section className="section section-highlight">

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

            {projects.slice(0, 2).map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
              />
            ))}

          </div>

        </div>

      </section>


      {/* DESIGN + DEVELOPMENT */}

      <section className="section">

        <div className="container">

          <p className="eyebrow">
            Design <span className="accent">+</span> development
          </p>

          <h2>
            From idea to
            <br />
            interface to code.
          </h2>

          <div className="arrow-cards">

            <div className="card">
              <span>01</span>
              <h3>Understand</h3>
              <p>
                Research, user needs, business goals
                and product strategy.
              </p>
            </div>
              <FiArrowRight aria-hidden="true" />

            <div className="card">
              <span>02</span>
              <h3>Design</h3>
              <p>
                Information architecture, interaction
                design, UI and prototyping.
              </p>
            </div>
            <FiArrowRight aria-hidden="true" />

            <div className="card">
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


      {/* CTA */}

      <section className="section section-highlight">

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