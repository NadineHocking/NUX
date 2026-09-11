import Link from "next/link";
import {
  FiArrowLeft,
  FiArrowRight,
  FiExternalLink,
} from "react-icons/fi";

export const metadata = {
  title: "Constructer.ai — Product Design & UI Engineering",
  description:
    "Constructer.ai case study covering brand strategy, UX/UI design, design systems and WordPress development.",
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

export default function ConstructerPage() {
  return (
    <article className="case-study">

      {/* ========================================
          HERO
      ======================================== */}

      <section className="case-hero">
        <div className="container">

          <div className="case-breadcrumb">
            <Link href="/work" className="back-link">
              <FiArrowLeft aria-hidden="true" />
              <span>Back to Work</span>
            </Link>

            <span className="breadcrumb-separator" aria-hidden="true">
              /
            </span>

            <span className="breadcrumb-current" aria-current="page">
              Constructer
            </span>
          </div>

          <div className="case-hero-content">

            <div className="case-eyebrow">
              Product Design · Brand · UI Engineering
            </div>

            <h1>
              Designing and building the digital foundation for an
              AI construction startup.
            </h1>

            <p className="case-hero-intro">
              Transforming a complex AI infrastructure platform into
              a credible, scalable digital brand and production
              website.
            </p>

            <div className="case-meta">

              <div>
                <span>Role</span>
                <strong>
                  Product Designer · UI/UX Designer · Frontend Developer
                </strong>
              </div>

              <div>
                <span>Industry</span>
                <strong>
                  Construction Technology · AI · SaaS
                </strong>
              </div>

              <div>
                <span>Project</span>
                <strong>
                  Brand Identity · Website · Design System
                </strong>
              </div>

              <div>
                <span>Platform</span>
                <strong>
                  WordPress · Custom Theme
                </strong>
              </div>

            </div>

          </div>

          {/* Large hero image */}
          <ImagePlaceholder
            label="HERO IMAGE"
            description="Final Constructer.ai website / homepage"
            className="placeholder-hero"
          />

        </div>
      </section>


      {/* ========================================
          OVERVIEW
      ======================================== */}

      <section className="case-section case-overview">
        <div className="container">

          <div className="case-grid case-grid-2">

            <div>
              <p className="eyebrow">Overview</p>

              <h2>
                From complex proposition to clear digital experience.
              </h2>
            </div>

            <div className="case-copy">

              <p>
                Constructer.ai is an AI construction intelligence
                platform designed to help project teams identify
                emerging risks and understand their potential impact
                before they become costly delays or claims.
              </p>

              <p>
                My role covered the project across strategy, branding,
                UX/UI design, visual design, design systems and
                frontend development.
              </p>

              <p>
                I translated the business proposition into a
                coherent visual identity and then carried that system
                through to a bespoke WordPress implementation.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ========================================
          CHALLENGE
      ======================================== */}

      <section className="case-section case-challenge">
        <div className="container">

          <div className="section-intro">
            <p className="eyebrow">01 — The challenge</p>

            <h2>
              How do you make an AI platform for the construction
              industry feel both technically advanced and immediately
              trustworthy?
            </h2>
          </div>

          <div className="case-grid case-grid-2">

            <div className="case-copy">
              <p>
                Construction is a complex, high-value industry where
                project information is often distributed across
                schedules, documents, emails and reporting systems.
              </p>

              <p>
                Constructer.ai needed to communicate how its AI
                technology could continuously analyse this
                information, surface emerging risks and help teams
                make better decisions earlier.
              </p>

              <p>
                The challenge was therefore bigger than designing a
                website. It was about creating a digital identity
                that could make a technically complex proposition
                understandable, credible and commercially compelling.
              </p>
            </div>

            <div className="challenge-list">

              <div>
                <strong>Complex technology</strong>
                <span>→</span>
                <strong>Simple communication</strong>
              </div>

              <div>
                <strong>AI innovation</strong>
                <span>→</span>
                <strong>Enterprise credibility</strong>
              </div>

              <div>
                <strong>Construction industry</strong>
                <span>→</span>
                <strong>Modern digital experience</strong>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ========================================
          BUSINESS & USERS
      ======================================== */}

      <section className="case-section">
        <div className="container">

          <div className="section-intro">
            <p className="eyebrow">02 — Understanding the business</p>

            <h2>
              Connecting AI, construction and project intelligence.
            </h2>

            <p>
              Understanding the business model and different audiences
              helped establish what the website needed to communicate
              and how information should be structured.
            </p>
          </div>

          <div className="business-diagram">

            <div>AI</div>
            <span>+</span>
            <div>Construction</div>
            <span>+</span>
            <div>Project Controls</div>
            <span>+</span>
            <div>Contract Management</div>

          </div>

          <div className="card-container">

            <div className="card">

              <span className="card-number">01</span>

              <h3>Buyers</h3>

              <ul>
                <li>General contractors</li>
                <li>EPCs</li>
                <li>Infrastructure owners</li>
                <li>Client teams</li>
              </ul>

            </div>

            <div className="card">

              <span className="card-number">02</span>

              <h3>Daily users</h3>

              <ul>
                <li>Project managers</li>
                <li>Planners</li>
                <li>Contract managers</li>
                <li>Project controls engineers</li>
              </ul>

            </div>

          </div>

          <ImagePlaceholder
            label="USER / BUSINESS RESEARCH"
            description="User groups, research notes or stakeholder mapping"
            className="placeholder-wide"
          />

        </div>
      </section>


      {/* ========================================
          COMPETITIVE LANDSCAPE
      ======================================== */}

      <section className="case-section case-muted">
        <div className="container">

          <div className="section-intro">
            <p className="eyebrow">03 — Competitive landscape</p>

            <h2>
              Finding space between futuristic AI and traditional
              construction technology.
            </h2>

            <p>
              I reviewed competitors across brand positioning,
              digital experience and product communication to
              understand how the category presented itself.
            </p>
          </div>

          <div className="card-container">

            <div className="card">
              <h3>Brand</h3>
              <p>
                Visual identity, logos, colour, typography and
                positioning.
              </p>
            </div>

            <div className="card">
              <h3>Experience</h3>
              <p>
                Information architecture, navigation, content
                hierarchy and conversion paths.
              </p>
            </div>

            <div className="card">
              <h3>Technology</h3>
              <p>
                Website platforms, CMS approaches and interaction
                patterns.
              </p>
            </div>

          </div>

          <ImagePlaceholder
            label="COMPETITIVE AUDIT"
            description="Competitor screenshots / positioning matrix"
            className="placeholder-wide"
          />

          <div className="insight-block">

            <span className="eyebrow">Key insight</span>

            <blockquote>
              Many AI companies relied on abstract, futuristic
              visual language, while construction technology
              companies tended towards industrial and utilitarian
              aesthetics.
            </blockquote>

            <p>
              The opportunity was to position Constructer.ai between
              these worlds: technologically intelligent, but
              structurally grounded.
            </p>

          </div>

        </div>
      </section>


      {/* ========================================
          BRAND STRATEGY
      ======================================== */}

      <section className="case-section">
        <div className="container">

          <div className="section-intro">
            <p className="eyebrow">04 — Brand strategy</p>

            <h2>
              Turning the product proposition into a simple
              communication system.
            </h2>
          </div>

          <div className="positioning-grid">

            <div>
              <span>What it does</span>
              <h3>Continuously analyses project information.</h3>
            </div>

            <div>
              <span>What it identifies</span>
              <h3>Emerging risks and issues.</h3>
            </div>

            <div>
              <span>What it quantifies</span>
              <h3>Schedule, cost and contractual impact.</h3>
            </div>

            <div>
              <span>What it enables</span>
              <h3>Earlier, better-informed decisions.</h3>
            </div>

          </div>

          <div className="detect-block">
            <span>Detect</span>
            <span>→</span>
            <span>Quantify</span>
            <span>→</span>
            <span>Act</span>
          </div>

        </div>
      </section>


      {/* ========================================
          VISUAL IDENTITY
      ======================================== */}

      <section className="case-section case-muted">
        <div className="container">

          <div className="section-intro">
            <p className="eyebrow">05 — Visual identity</p>

            <h2>
              A visual language grounded in structure, systems and
              intelligence.
            </h2>

            <p>
              The identity combines architectural geometry, modular
              structures and connected systems to represent the
              relationship between construction and AI.
            </p>
          </div>

          <ImagePlaceholder
            label="LOGO EXPLORATION"
            description="Initial sketches / logo concepts"
            className="placeholder-large"
          />

          <div className="case-grid case-grid-2 image-row">

            <ImagePlaceholder
              label="LOGO CONCEPT 01"
              description="Exploration"
            />

            <ImagePlaceholder
              label="LOGO CONCEPT 02"
              description="Exploration"
            />

          </div>

          <ImagePlaceholder
            label="FINAL LOGO"
            description="Final Constructer.ai identity"
            className="placeholder-large"
          />

        </div>
      </section>


      {/* ========================================
          COLOUR
      ======================================== */}

      <section className="case-section">
        <div className="container">

          <div className="case-grid case-grid-2">

            <div>
              <p className="eyebrow">06 — Colour system</p>

              <h2>
                Structural foundations with a signal layer.
              </h2>

              <p className="case-copy">
                The colour system balances enterprise credibility
                with a distinctive technology signal.
              </p>
            </div>

            <div className="colour-system">

              <div className="colour-swatch swatch-navy">
                <span>#000E30</span>
              </div>

              <div className="colour-swatch swatch-cyan">
                <span>#33FFFF</span>
              </div>

              <div className="colour-swatch swatch-blue">
                <span>#3366FF</span>
              </div>

              <div className="colour-swatch swatch-light">
                <span>Surface</span>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ========================================
          TYPOGRAPHY
      ======================================== */}

      <section className="case-section case-muted">
        <div className="container">

          <div className="section-intro">
            <p className="eyebrow">07 — Typography</p>

            <h2>
              Clear hierarchy for complex information.
            </h2>
          </div>

          <div className="type-showcase">

            <div>
              <span>IBM Plex Sans</span>

              <h3>
                AI-powered intelligence
                <br />
                for construction.
              </h3>
            </div>

            <div>
              <span>Roboto Flex</span>

              <p>
                Constructer continuously analyses project
                information to identify risk and help teams act
                before problems become claims.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================
          UX / IA
      ======================================== */}

      <section className="case-section">
        <div className="container">

          <div className="section-intro">
            <p className="eyebrow">08 — UX & information architecture</p>

            <h2>
              Structuring the experience around understanding,
              trust and action.
            </h2>

            <p>
              The information architecture was designed to take
              visitors from understanding the problem through to
              understanding the platform and ultimately starting a
              conversation.
            </p>
          </div>

          <ImagePlaceholder
            label="SITEMAP"
            description="Website information architecture"
            className="placeholder-large"
          />

          <div className="journey">

            <div>
              <span>01</span>
              <strong>Visitor arrives</strong>
            </div>

            <div>
              <span>02</span>
              <strong>Understand the problem</strong>
            </div>

            <div>
              <span>03</span>
              <strong>Understand Constructer's approach</strong>
            </div>

            <div>
              <span>04</span>
              <strong>Explore the platform</strong>
            </div>

            <div>
              <span>05</span>
              <strong>See business impact</strong>
            </div>

            <div>
              <span>06</span>
              <strong>Build trust</strong>
            </div>

            <div>
              <span>07</span>
              <strong>Request a conversation</strong>
            </div>

          </div>

          <ImagePlaceholder
            label="WIREFRAMES"
            description="Early website wireframes"
            className="placeholder-large"
          />

        </div>
      </section>


      {/* ========================================
          UI DESIGN
      ======================================== */}

      <section className="case-section case-muted">
        <div className="container">

          <div className="section-intro">
            <p className="eyebrow">09 — UI design system</p>

            <h2>
              Translating the brand into a scalable interface.
            </h2>

            <p>
              The visual identity was translated into reusable
              interface patterns, components and responsive layouts
              that could scale across the website.
            </p>
          </div>

          <div className="card-container">

            <div className="card">
              <span className="card-number">01</span>
              <h3>Structured</h3>
              <p>
                Architectural grid and consistent spacing.
              </p>
            </div>

            <div className="card">
              <span className="card-number">02</span>
              <h3>Clear</h3>
              <p>
                Complex information presented progressively.
              </p>
            </div>

            <div className="card">
              <span className="card-number">03</span>
              <h3>Signal-driven</h3>
              <p>
                Cyan highlights important actions and information.
              </p>
            </div>

            <div className="card">
              <span className="card-number">04</span>
              <h3>Controlled density</h3>
              <p>
                Enough information to communicate sophistication
                without overwhelming users.
              </p>
            </div>

          </div>

          <ImagePlaceholder
            label="FIGMA DESIGN SYSTEM"
            description="Components, typography, buttons, cards and UI patterns"
            className="placeholder-large"
          />

          <div className="case-grid case-grid-2 image-row">

            <ImagePlaceholder
              label="DESKTOP UI"
              description="Desktop website designs"
            />

            <ImagePlaceholder
              label="MOBILE UI"
              description="Responsive mobile designs"
            />

          </div>

        </div>
      </section>


      {/* ========================================
          FIGMA TO CODE
      ======================================== */}

      <section className="case-section">
        <div className="container">

          <div className="section-intro">
            <p className="eyebrow">10 — From Figma to production</p>

            <h2>
              Bridging the gap between design and development.
            </h2>

            <p>
              Rather than handing the designs to a separate
              development team, I translated the design system
              directly into a bespoke WordPress implementation.
            </p>
          </div>

          <div className="process-flow">

            <div>
              <span>01</span>
              <h3 className="card-title">Figma</h3>
              <p className="card-description">Design system and visual language</p>
            </div>

            <FiArrowRight aria-hidden="true" />

            <div>
              <span>02</span>
              <h3 className="card-title">Components</h3>
              <p className="card-description">Reusable interface patterns</p>
            </div>

            <FiArrowRight aria-hidden="true" />

            <div>
              <span>03</span>
              <h3 className="card-title">Responsive layouts</h3>
              <p className="card-description">Desktop and mobile implementation</p>
            </div>

            <FiArrowRight aria-hidden="true" />

            <div>
              <span>04</span>
              <h3 className="card-title">Code</h3>
              <p className="card-description">HTML · SCSS · PHP · JavaScript</p>
            </div>

          </div>

          <ImagePlaceholder
            label="DESIGN → CODE"
            description="Figma design alongside production implementation"
            className="placeholder-large"
          />

        </div>
      </section>


      {/* ========================================
          WORDPRESS
      ======================================== */}

      <section className="case-section case-muted">
        <div className="container">

          <div className="case-grid case-grid-2">

            <div>
              <p className="eyebrow">11 — Custom WordPress development</p>

              <h2>
                A bespoke theme built around the design system.
              </h2>
            </div>

            <div className="case-copy">

              <p>
                Constructer needed a CMS that would allow its team to
                manage and evolve marketing content without requiring
                developer intervention.
              </p>

              <p>
                I built a custom WordPress theme to maintain close
                control over the relationship between the design
                system and the production website.
              </p>

            </div>

          </div>

          <div className="number-card-grid">

            <div>
              <h3>Design fidelity</h3>
              <p>
                Precisely reproduce the Figma design system.
              </p>
            </div>

            <div>
              <h3>Performance</h3>
              <p>
                Avoid unnecessary framework and plugin overhead.
              </p>
            </div>

            <div>
              <h3>Scalability</h3>
              <p>
                Create reusable components and templates.
              </p>
            </div>

            <div>
              <h3>Control</h3>
              <p>
                Maintain ownership of HTML, SCSS, PHP and
                JavaScript.
              </p>
            </div>

          </div>

          <ImagePlaceholder
            label="WORDPRESS DEVELOPMENT"
            description="Custom theme / template implementation"
            className="placeholder-large"
          />

        </div>
      </section>


      {/* ========================================
          TECHNICAL IMPLEMENTATION
      ======================================== */}

      <section className="case-section">
        <div className="container">

          <div className="section-intro">
            <p className="eyebrow">12 — Technical implementation</p>

            <h2>
              Building a maintainable frontend architecture.
            </h2>

            <p>
              The implementation used a modular SCSS architecture
              alongside PHP templates, JavaScript interactions and
              WordPress's CMS functionality.
            </p>
          </div>

          <div className="tech-stack">

            <span>HTML5</span>
            <span>SCSS</span>
            <span>JavaScript</span>
            <span>PHP</span>
            <span>WordPress</span>
            <span>MySQL</span>

          </div>

          <ImagePlaceholder
            label="CODE"
            description="SCSS architecture / PHP templates / JavaScript"
            className="placeholder-large"
          />

        </div>
      </section>


      {/* ========================================
          DATABASE
      ======================================== */}

      <section className="case-section case-muted">
        <div className="container">

          <div className="section-intro">
            <p className="eyebrow">13 — Database & content management</p>

            <h2>
              Managing the transition to the new platform.
            </h2>

            <p>
              The project also involved managing existing website
              data as part of the transition to the new WordPress
              implementation.
            </p>
          </div>

          <div className="migration-flow">

            <div>Existing data</div>
            <span>→</span>
            <div>Data mapping</div>
            <span>→</span>
            <div>Migration</div>
            <span>→</span>
            <div>Validation</div>
            <span>→</span>
            <div>Production</div>

          </div>

          <ImagePlaceholder
            label="DATABASE / CONTENT"
            description="Database management or CMS implementation"
            className="placeholder-wide"
          />

        </div>
      </section>


      {/* ========================================
          INTERNATIONALISATION
      ======================================== */}

      <section className="case-section">
        <div className="container">

          <div className="case-grid case-grid-2">

            <div>
              <p className="eyebrow">14 — Internationalisation</p>

              <h2>
                Designing for an international audience.
              </h2>
            </div>

            <div className="case-copy">

              <p>
                The website needed to support English and Portuguese
                while maintaining a consistent visual system and
                responsive experience.
              </p>

              <p>
                The language-switching functionality was incorporated
                into the website architecture rather than treated as
                an afterthought.
              </p>

            </div>

          </div>

          <div className="case-grid case-grid-2 image-row">

            <ImagePlaceholder
              label="ENGLISH"
              description="English website"
            />

            <ImagePlaceholder
              label="PORTUGUESE"
              description="Portuguese website"
            />

          </div>

        </div>
      </section>


      {/* ========================================
          PRODUCTION
      ======================================== */}

      <section className="case-section case-muted">
        <div className="container">

          <div className="section-intro">
            <p className="eyebrow">15 — Production considerations</p>

            <h2>
              Designing beyond the mockup.
            </h2>
          </div>

          <div className="number-card-grid">

            <div>
              <h3>Responsive</h3>
              <p>
                Interfaces designed and implemented across desktop,
                tablet and mobile breakpoints.
              </p>
            </div>

            <div>
              <h3>Accessibility</h3>
              <p>
                Semantic structure, interaction states, readable
                typography and accessible colour contrast.
              </p>
            </div>

            <div>
              <h3>Performance</h3>
              <p>
                Lightweight implementation and considered use of
                assets and dependencies.
              </p>
            </div>

            <div>
              <h3>SEO</h3>
              <p>
                Structured content, metadata and internationalised
                website architecture.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================
          OUTCOME
      ======================================== */}

      <section className="case-section case-muted">
        <div className="container">

          <div className="section-intro">
            <p className="eyebrow">16 — Outcome</p>

            <h2>
              A digital foundation for Constructer.ai's next stage.
            </h2>

            <p>
              The final website established a visual and technical
              foundation for Constructer.ai's launch, combining a new
              brand identity with a scalable digital design system
              and bespoke WordPress implementation.
            </p>
          </div>

          <div className="number-card-grid">

            <div>
              <span className="card-number">01</span>
              <h3>Brand</h3>
              <p>
                A distinctive identity connecting construction and AI.
              </p>
            </div>

            <div>
              <span className="card-number">02</span>
              <h3>Product communication</h3>
              <p>
                A clearer way of explaining a technically complex
                proposition.
              </p>
            </div>

            <div>
              <span className="card-number">03</span>
              <h3>Design system</h3>
              <p>
                Reusable visual and UI foundations for future
                experiences.
              </p>
            </div>

            <div>
              <span className="card-number">04</span>
              <h3>Development</h3>
              <p>
                A bespoke WordPress implementation providing control,
                performance and scalability.
              </p>
            </div>

          </div>

          <ImagePlaceholder
            label="FINAL WEBSITE"
            description="Full-page final website / selected final screens"
            className="placeholder-hero"
          />

        </div>
      </section>


      {/* ========================================
          REFLECTION
      ======================================== */}

      <section className="case-section case-reflection">
        <div className="container">

          <div className="case-grid case-grid-2">

            <div>
              <p className="eyebrow">17 — Reflection</p>

              <h2>
                Designing for trust is different from designing for
                novelty.
              </h2>
            </div>

            <div className="case-copy">

              <p>
                AI products can easily lean towards futuristic visual
                language. For Constructer.ai, the challenge was
                creating a sense of technological intelligence while
                remaining credible to an industry responsible for
                complex, high-value projects.
              </p>

              <p>
                Working across design and development also changed
                how I approached the system. Understanding how the
                website would actually be built influenced decisions
                around components, responsiveness, CMS flexibility
                and maintainability.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ========================================
          FINAL GALLERY
      ======================================== */}

      <section className="case-section">
        <div className="container">

          <div className="section-intro">
            <p className="eyebrow">Project gallery</p>

            <h2>
              Selected final screens.
            </h2>
          </div>

          
          <ImagePlaceholder
            label="FINAL SCREEN 01"
            description="Homepage"
            className="placeholder-large"
          />
      
          <div className="case-gallery">

            <ImagePlaceholder
              label="FINAL SCREEN 02"
              description="Product / platform section"
            />

            <ImagePlaceholder
              label="FINAL SCREEN 03"
              description="Solutions / content section"
            />


          <ImagePlaceholder
            label="FINAL SCREEN 04"
            description="Contact / conversion section"
            className="placeholder-large"
          />
          </div>
        </div>
      </section>


      {/* ========================================
          NEXT PROJECT
      ======================================== */}

      <section className="next-project">
        <div className="container">

          <p className="eyebrow">Next project</p>

          <Link href="/work" className="next-project-link">
            <span>View all work</span>
            <FiArrowRight aria-hidden="true" />
          </Link>

        </div>
      </section>

    </article>
  );
}