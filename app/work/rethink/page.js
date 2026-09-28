import Link from "next/link";
import {
  FiArrowLeft,
  FiArrowRight,
  FiType,
  FiEye,
  FiSmartphone,
  FiMenu,
  FiExternalLink,
} from "react-icons/fi";

export const metadata = {
  title: "Rethink - Branding and Wordpress Development",
  description:
    "A start-up that provides training in the property/real estate and technology spaces. ",
};

const ImagePlaceholder = ({
  label,
  description,
  className = "",
}) => {
  return (
    <div className={`case-image-placeholder ${className}`}>
      <div className="placeholder-content">
        <span className="placeholder-label">{label}</span>

        {description && (
          <span className="placeholder-description">
            {description}
          </span>
        )}
      </div>
    </div>
  );
};

export default function RethinkPage() {
  return (
    <article className="case-study rethink-case-study">

      {/* HERO */}

      <section className="case-section case-hero">
        <div className="container">

          <div className="case-breadcrumb">
            <Link href="/work" className="back-link">
              <FiArrowLeft aria-hidden="true" />
              <span>Back to Work</span>
            </Link>

            <span
              className="breadcrumb-separator"
              aria-hidden="true"
            >
              /
            </span>

            <span
              className="breadcrumb-current"
              aria-current="page"
            >
              Rethink
            </span>
          </div>

          <div className="case-hero-content">

            <p className="eyebrow">
              PRODUCT DESIGN · BRAND · UI ENGINEERING
            </p>

            <h1>
              Designing and building a training platform
              for property and technology professionals.
            </h1>

            <p className="case-hero-intro">
              Creating the brand, user experience and
              WordPress website for a new professional
              training business.
            </p>

            <div className="case-meta">

              <div>
                <span className="case-meta-label">
                  Role
                </span>

                <strong>
                  Founding Designer & Developer
                </strong>
              </div>

              <div>
                <span className="case-meta-label">
                  Industry
                </span>

                <strong>
                  Property · Real Estate · Technology
                </strong>
              </div>

              <div>
                <span className="case-meta-label">
                  Project
                </span>

                <strong>
                  Brand & Website
                </strong>
              </div>

              <div>
                <span className="case-meta-label">
                  Platform
                </span>

                <strong>
                  WordPress
                </strong>
              </div>

            </div>

          </div>

          <ImagePlaceholder
            label="Rethink website hero"
            description="Final website hero image"
            className="placeholder-hero"
          />

        </div>
      </section>


      {/* OVERVIEW */}

      <section className="case-section section-highlight">
        <div className="container">

          <div className="section-intro">
            <p className="eyebrow">
              OVERVIEW
            </p>

            <h2>
              From business knowledge to a clear
              training experience.
            </h2>
          </div>

          <div className="case-grid">

            <div className="case-copy">

              <p>
                Rethink is a startup providing professional
                training across the property, real estate
                and technology sectors.
              </p>

              <p>
                As the founding designer and developer,
                I worked across the project from business
                discovery and branding through to UX/UI
                design, frontend development, WordPress
                implementation and testing.
              </p>

              <p>
                Existing stakeholder research provided
                a strong understanding of the target
                audiences, allowing the project to move
                efficiently into defining hypotheses,
                user journeys and the initial design
                direction.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* CHALLENGE */}

      <section className="case-section">

        <div className="container">

          <div className="section-intro">

            <p className="eyebrow">
              01 – THE CHALLENGE
            </p>

            <h2>
              Making a new training business easy
              to understand and navigate.
            </h2>

          </div>

          <div className="challenge-list">

            <div>
              <span>01</span>
              <h3>Course discovery</h3>
              <p>
                Help prospective students understand
                the available training.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Trainer discovery</h3>
              <p>
                Provide information that helps users
                understand who delivers the training.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Course booking</h3>
              <p>
                Create a clear pathway from evaluating
                a course to booking a place.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ROLE */}

      <section className="case-section section-highlight">

        <div className="container">

          <div className="section-intro">

            <p className="eyebrow">
              02 – MY ROLE
            </p>

            <h2>
              Working across design and development.
            </h2>

          </div>

          <div className="positioning-grid">

            <div className="positioning-item">
              <h3>Research</h3>
              <p>
                Business and user research, stakeholder
                discussions and hypothesis development.
              </p>
            </div>

            <div className="positioning-item">
              <h3>Design</h3>
              <p>
                Branding, UX strategy, user journeys,
                wireframes, prototyping and UI design.
              </p>
            </div>

            <div className="positioning-item">
              <h3>Development</h3>
              <p>
                HTML, SCSS, JavaScript, PHP and
                WordPress development.
              </p>
            </div>

            <div className="positioning-item">
              <h3>Testing</h3>
              <p>
                Stakeholder feedback, responsive testing
                and final staging validation.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* BUSINESS RESEARCH */}

      <section className="case-section">

        <div className="container">

          <div className="section-intro">

            <p className="eyebrow">
              03 – DISCOVERY
            </p>

            <h2>
              Understanding the business before
              designing the experience.
            </h2>

          </div>

          <div className="case-grid">

            <div className="case-copy">

              <h3>
                Defining the business goals
              </h3>

              <p>
                The project began with stakeholder
                discussions to understand the business
                objectives, timeline and budget.
              </p>

              <p>
                We also explored the purpose of each
                course and identified the information
                prospective students would need to
                make a decision.
              </p>

            </div>

            <div className="insight-block">

              <span className="eyebrow">
                KEY TAKEAWAY
              </span>

              <p>
                Existing research provided a strong
                understanding of the target audiences,
                allowing the design process to move
                directly into defining hypotheses
                and user journeys.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* HYPOTHESES */}

      <section className="case-section section-highlight">

        <div className="container">

          <div className="section-intro">

            <p className="eyebrow">
              04 – HYPOTHESES
            </p>

            <h2>
              Defining the primary reasons users
              would visit the website.
            </h2>

          </div>

          <div className="card-container">

            <div className="card">
              <span>01</span>
              <h3>Explore courses</h3>
              <p>
                Users visit the website to find
                information about available courses.
              </p>
            </div>

            <div className="card">
              <span>02</span>
              <h3>Understand trainers</h3>
              <p>
                Users want information about the
                trainers delivering the courses.
              </p>
            </div>

            <div className="card">
              <span>03</span>
              <h3>Book a place</h3>
              <p>
                Users visit with the intention of
                booking a course.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* BRANDING */}

      <section className="case-section">

        <div className="container">

          <div className="section-intro">

            <p className="eyebrow">
              05 – BRAND DISCOVERY
            </p>

            <h2>
              Establishing the Rethink visual identity.
            </h2>

            <p>
              As a new business, Rethink also needed
              a visual identity that could establish
              its presence before the website was built.
            </p>

          </div>

          <div className="arrow-cards">

            <div className="card">
              <span>01</span>
              <h3>Explore</h3>
              <p>Brainstorm brand names.</p>
            </div>
            <FiArrowRight aria-hidden="true" />

            <div className="card">
              <span>02</span>
              <h3>Sketch</h3>
              <p>Explore logo concepts.</p>
            </div>
            <FiArrowRight aria-hidden="true" />

            <div className="card">
              <span>03</span>
              <h3>Refine</h3>
              <p>Select and digitise the strongest concepts.</p>
            </div>
            <FiArrowRight aria-hidden="true" />

            <div className="card">
              <span>04</span>
              <h3>Define</h3>
              <p>Develop moodboards and visual direction.</p>
            </div>
            <FiArrowRight aria-hidden="true" />

            <div className="card">
              <span>05</span>
              <h3>Finalise</h3>
              <p>Refine the selected identity.</p>
            </div>

          </div>

          <div className="case-gallery">

            <ImagePlaceholder
              label="Logo concepts"
              description="Initial Rethink logo exploration"
            />

            <ImagePlaceholder
              label="Moodboard"
              description="Visual identity exploration"
            />

          </div>

        </div>

      </section>


      {/* USER JOURNEY */}

      <section className="case-section section-highlight">

        <div className="container">

          <div className="section-intro">

            <p className="eyebrow">
              06 – USER JOURNEYS
            </p>

            <h2>
              Turning user hypotheses into
              practical journeys.
            </h2>

          </div>

          <p className="case-copy">
            The initial hypotheses provided the foundation
            for mapping how prospective students could
            move through the website.
          </p>

          <ImagePlaceholder
            label="Rethink flow chart"
            description="Initial user journey map"
            className="placeholder-large"
          />

        </div>

      </section>


      {/* WIREFRAMES */}

      <section className="case-section">

        <div className="container">

          <div className="section-intro">

            <p className="eyebrow">
              07 – UX DESIGN
            </p>

            <h2>
              Exploring the experience before
              committing to visual design.
            </h2>

          </div>

          <div className="case-grid">

            <div className="case-copy">

              <p>
                Low-fidelity designs were created using
                the agreed user journeys.
              </p>

              <p>
                These concepts were prototyped and
                presented to stakeholders for review
                and testing before moving into
                high-fidelity design.
              </p>

            </div>

            <div>
              <ImagePlaceholder
                label="Low-fidelity prototype"
                description="Initial website wireframes"
              />
            </div>

          </div>

          <div className="prototype-link">

            <a
              href="https://embed.figma.com/proto/fkGDnHym89cPtsjAlzdskG/Wireframes?page-id=&node-id=296-2445&p=f&viewport=334%2C637%2C0.09&scaling=scale-down&content-scaling=fixed&starting-point-node-id=296%3A2445&embed-host=share"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-secondary"
            >
              <span>View Figma prototype</span>
              <FiExternalLink
                className="button-icon"
                aria-hidden="true"
              />
            </a>

          </div>

        </div>

      </section>


      {/* HIGH FIDELITY */}

      <section className="case-section section-highlight">

        <div className="container">

          <div className="section-intro">

            <p className="eyebrow">
              08 – UI DESIGN
            </p>

            <h2>
              Translating the validated structure
              into a complete visual experience.
            </h2>

            <p>
              Once the low-fidelity experience had been
              reviewed and signed off, I developed the
              high-fidelity website concepts.
            </p>

          </div>

          <div className="case-gallery">

            <ImagePlaceholder
              label="High-fidelity design"
              description="Rethink website concept"
            />

            <ImagePlaceholder
              label="High-fidelity design"
              description="Responsive website concept"
            />

            <ImagePlaceholder
              label="High-fidelity design"
              description="Course content experience"
            />

            <ImagePlaceholder
              label="High-fidelity design"
              description="Mobile experience"
            />

          </div>

        </div>

      </section>


      {/* ACCESSIBILITY */}

      <section className="case-section">

        <div className="container">

          <div className="section-intro">

            <p className="eyebrow">
              08 – ACCESSIBILITY
            </p>

            <h2>
              Designing for different users,
              devices and contexts.
            </h2>

          </div>

          <div className="card-container">

            <div className="card">
              <FiType className="card-icon" aria-hidden="true" />
              <h3>Typography</h3>
              <p>
                Legible type sizes and clear hierarchy.
              </p>
            </div>

            <div className="card">
              <FiEye className="card-icon" aria-hidden="true" />
              <h3>Contrast</h3>
              <p>
                Consideration of contrast between
                foreground and background content.
              </p>
            </div>

            <div className="card">
              <FiSmartphone className="card-icon" aria-hidden="true" />
              <h3>Responsive</h3>
              <p>
                Layouts designed to work across
                different screen sizes.
              </p>
            </div>

            <div className="card">
              <FiMenu className="card-icon" aria-hidden="true" />
              <h3>Navigation</h3>
              <p>
                Clear hierarchy and interaction
                patterns supporting keyboard use.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* VALIDATION */}

      <section className="case-section section-highlight">

        <div className="container">

          <div className="section-intro">

            <p className="eyebrow">
              09 – VALIDATION
            </p>

            <h2>
              Designing, testing and refining
              throughout the process.
            </h2>

          </div>

          <div className="arrow-cards">

            <div className="card">
              <span>01</span>
              <h3>Research</h3>
            </div>
            <FiArrowRight aria-hidden="true" />

            <div className="card">
              <span>02</span>
              <h3>Hypotheses</h3>
            </div>
            <FiArrowRight aria-hidden="true" />

            <div className="card">
              <span>03</span>
              <h3>User journeys</h3>
            </div>
            <FiArrowRight aria-hidden="true" />

            <div className="card">
              <span>04</span>
              <h3>Prototype</h3>
            </div>
            <FiArrowRight aria-hidden="true" />

            <div className="card">
              <span>05</span>
              <h3>Test</h3>
            </div>
            <FiArrowRight aria-hidden="true" />

            <div className="card">
              <span>06</span>
              <h3>Refine</h3>
            </div>

          </div>

        </div>

      </section>


      {/* DEVELOPMENT */}

      <section className="case-section">

        <div className="container">

          <div className="section-intro">

            <p className="eyebrow">
              10 – DEVELOPMENT
            </p>

            <h2>
              Taking the design from Figma
              into production.
            </h2>

          </div>

          <div className="development-grid">

            <div className="case-copy">

              <p>
                Once the designs were approved, I
                hand-coded the website using HTML5,
                CSS3, Sass/SCSS and Vanilla JavaScript,
                with PHP and WordPress used for the
                content management implementation.
              </p>

              <p>
                Development began in a local environment
                before being migrated to a staging
                environment on the client's live server.
              </p>

            </div>

            <div className="tech-stack">

              <span>HTML5</span>
              <span>CSS3</span>
              <span>Sass / SCSS</span>
              <span>JavaScript</span>
              <span>PHP</span>
              <span>WordPress</span>
              <span>Git</span>

            </div>

          </div>

        </div>

      </section>


      {/* DEVELOPMENT IMAGES */}

      <section className="case-section section-highlight">

        <div className="container">

          <div className="case-gallery">

            <ImagePlaceholder
              label="HTML5"
              description="Frontend implementation"
            />

            <ImagePlaceholder
              label="CSS3"
              description="Interface styling"
            />

            <ImagePlaceholder
              label="Sass / SCSS"
              description="Maintainable styling architecture"
            />

            <ImagePlaceholder
              label="JavaScript"
              description="Frontend interaction"
            />

            <ImagePlaceholder
              label="PHP"
              description="WordPress implementation"
            />

            <ImagePlaceholder
              label="WordPress"
              description="CMS implementation"
            />

          </div>

        </div>

      </section>


      {/* STAGING */}

      <section className="case-section">

        <div className="container">

          <div className="section-intro">

            <p className="eyebrow">
              11 - TESTING & LAUNCH
            </p>

            <h2>
              From local development to
              production-ready website.
            </h2>

          </div>

          <div className="card-container">

            <div class="card">
              <span>01</span>
              <h3>Local development</h3>
              <p>
                Build and test the website in a
                controlled local environment.
              </p>
            </div>

            <div class="card">
              <span>02</span>
              <h3>Staging</h3>
              <p>
                Migrate the website to the client's
                staging environment.
              </p>
            </div>

            <div class="card">
              <span>03</span>
              <h3>Review</h3>
              <p>
                Implement final stakeholder changes
                and complete testing.
              </p>
            </div>

            <div class="card">
              <span>04</span>
              <h3>Launch</h3>
              <p>
                Sign off and move the website
                into production.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* OUTCOME */}

      <section className="case-section section-highlight">

        <div className="container">

          <div className="section-intro">

            <p className="eyebrow">
              12 – OUTCOME
            </p>

            <h2>
              A complete digital foundation
              for a new training business.
            </h2>

          </div>

           <div className="positioning-grid">

            <div className="positioning-item">
              <h3>Brand</h3>
              <p>
                New visual identity and brand direction.
              </p>
            </div>

            <div className="positioning-item">   
              <h3>UX</h3>
              <p>
                Structured course discovery and
                booking journeys.
              </p>
            </div>

            <div className="positioning-item">              
              <h3>UI</h3>
              <p>
                Responsive high-fidelity interface
                design.
              </p>
            </div>

            <div className="positioning-item">          
              <h3>Development</h3>
              <p>
                Custom WordPress implementation using
                HTML, SCSS, JavaScript and PHP.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* REFLECTION */}

      <section className="case-section case-reflection">

        <div className="container">

          <p className="eyebrow">
            13 - REFLECTION
          </p>

          <h2>
            Understand the problem. Structure
            the experience. Design it. Build it.
          </h2>

          <p>
            Rethink demonstrated the value of working
            across the full digital product lifecycle.
            By combining business understanding,
            UX design, visual design and development,
            I was able to maintain continuity from
            the initial concept through to production.
          </p>

        </div>

      </section>


      {/* NEXT PROJECT */}

      <section className="case-section next-project">

        <div className="container">

          <p className="eyebrow">
            NEXT PROJECT
          </p>

          <Link
            href="/work/cargiant"
            className="next-project-link"
          >
            <span>
              Cargiant
            </span>

            <FiArrowRight
              aria-hidden="true"
            />
          </Link>

        </div>

      </section>

    </article>
  );
}