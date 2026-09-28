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

const ImagePlaceholder = ({
  label,
  description,
  className = "",
}) => {
  return (
    <div className={`case-image-placeholder ${className}`}>
      <div className="placeholder-content">
        <span className="placeholder-label">
          {label}
        </span>

        {description && (
          <span className="placeholder-description">
            {description}
          </span>
        )}
      </div>
    </div>
  );
};

export default function CarGiantPage() {
  return (
    <article className="case-study cargiant-case-study">

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
              CarGiant
            </span>
          </div>

          <div className="case-hero-content">

            <p className="eyebrow">
              PRODUCT DESIGN · UX RESEARCH · UI
            </p>

            <h1>
              Redesigning the digital car-buying
              journey around user needs.
            </h1>

            <p className="case-hero-intro">
              Using research, usability testing and
              experimentation to improve key CarGiant
              customer journeys.
            </p>

            <div className="case-meta">

              <div>
                <span className="case-meta-label">
                  Role
                </span>

                <strong>
                  Senior Graphic Designer
                </strong>
              </div>

              <div>
                <span className="case-meta-label">
                  Industry
                </span>

                <strong>
                  Automotive
                </strong>
              </div>

              <div>
                <span className="case-meta-label">
                  Focus
                </span>

                <strong>
                  UX · UI · Brand · Research
                </strong>
              </div>

              <div>
                <span className="case-meta-label">
                  Platform
                </span>

                <strong>
                  Web
                </strong>
              </div>

            </div>

          </div>

          <ImagePlaceholder
            label="CarGiant website"
            description="Final website redesign"
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
              From visual redesign to
              experience optimisation.
            </h2>

          </div>

          <div className="case-grid">

            <div className="case-copy">

              <p>
                Following the launch of a new website,
                CarGiant identified a decline in return
                on investment and began investigating
                potential causes.
              </p>

              <p>
                Research and design activity focused
                particularly on the vehicle search,
                finance and test-drive journeys.
              </p>

              <p>
                As Senior Graphic Designer, I worked
                with stakeholders and the Marketing
                Director to evolve the brand and
                redesign the digital experience using
                research and testing.
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
              Understanding why the experience
              was not performing as expected.
            </h2>

          </div>

          <div className="challenge-list">

            <div>
              <span>01</span>

              <h3>
                Brand perception
              </h3>

              <p>
                The updated design did not fully
                communicate the intended CarGiant
                brand proposition.
              </p>
            </div>

            <div>
              <span>02</span>

              <h3>
                Finance journey
              </h3>

              <p>
                The finance application experience
                was creating unnecessary friction.
              </p>
            </div>

            <div>
              <span>03</span>

              <h3>
                Search journey
              </h3>

              <p>
                Finding and refining vehicle searches
                was not as straightforward as it
                could be.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* BUSINESS RESEARCH */}

      <section className="case-section section-highlight">

        <div className="container">

          <div className="section-intro">

            <p className="eyebrow">
              02 – BUSINESS RESEARCH
            </p>

            <h2>
              Starting with what the business
              already knew.
            </h2>

          </div>

          <div className="case-grid">

            <div className="case-copy">

              <h3>
                Kick-off workshops
              </h3>

              <p>
                I met with stakeholders to understand
                what was already known about the
                problem and what had previously been
                explored.
              </p>

              <p>
                These discussions provided insight
                into potential market threats and
                opportunities affecting the customer
                experience.
              </p>

            </div>

            <div className="case-copy">

              <h3>
                Design review
              </h3>

              <p>
                I reviewed the existing experience
                to understand the team's vision,
                potential design opportunities and
                work already undertaken.
              </p>

            </div>

          </div>

          <ImagePlaceholder
            label="Existing website"
            description="Known pain points and design review"
            className="placeholder-large"
          />

        </div>

      </section>


      {/* USER RESEARCH */}

      <section className="case-section">

        <div className="container">

          <div className="section-intro">

            <p className="eyebrow">
              03 – USER RESEARCH
            </p>

            <h2>
              Understanding customers,
              behaviours and attitudes.
            </h2>

          </div>

          <div className="positioning-grid">

            <div className="positioning-item">

              <h3>
                Interviews
              </h3>

              <p>
                Explored user goals, behaviours,
                attitudes and expectations.
              </p>

            </div>

            <div className="positioning-item">

              <h3>
                Ethnography
              </h3>

              <p>
                Observed customers in their
                environments to understand
                buying behaviours.
              </p>

            </div>

            <div className="positioning-item">

              <h3>
                Usability testing
              </h3>

              <p>
                Observed customers using the
                existing experience to identify
                points of friction.
              </p>

            </div>

            <div className="positioning-item">

              <h3>
                A/B testing
              </h3>

              <p>
                Tested specific interface
                decisions and their effect
                on user behaviour.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* A/B TEST */}

      <section className="case-section section-highlight">

        <div className="container">

          <div className="section-intro">

            <p className="eyebrow">
              04 – EXPERIMENTATION
            </p>

            <h2>
              Testing the search experience
              rather than relying on assumptions.
            </h2>

          </div>

          <div className="case-grid">

            <div className="case-copy">

              <h3>
                Horizontal vs vertical
              </h3>

              <p>
                An A/B test compared alternative
                search form layouts to understand
                how layout, hierarchy and positioning
                affected the customer journey.
              </p>

            </div>

            <div className="insight-block">

              <span className="eyebrow">
                INSIGHT
              </span>

              <p>
                Testing indicated that users preferred
                the vertical form layout.
              </p>

            </div>

          </div>

          <ImagePlaceholder
            label="A/B test"
            description="Horizontal versus vertical search form"
            className="placeholder-large"
          />

        </div>

      </section>


      {/* HYPOTHESES */}

      <section className="case-section">

        <div className="container">

          <div className="section-intro">

            <p className="eyebrow">
              05 – HYPOTHESES
            </p>

            <h2>
              Turning research findings into
              design hypotheses.
            </h2>

          </div>

          <div className="card-container">

            <div className="card">
              <span>01</span>

              <h3>
                Brand value
              </h3>

              <p>
                Customers prefer a brand that
                communicates affordability,
                ease and value for money.
              </p>
            </div>

            <div className="card">
              <span>02</span>

              <h3>
                Finance
              </h3>

              <p>
                Customers want to complete
                finance applications in as
                few steps as possible.
              </p>
            </div>

            <div className="card">
              <span>03</span>

              <h3>
                Search
              </h3>

              <p>
                Customers want to search
                with minimal effort.
              </p>
            </div>

            <div className="card">
              <span>04</span>

              <h3>
                Discovery
              </h3>

              <p>
                Customers want to find
                suitable vehicles quickly.
              </p>
            </div>

            <div className="card">
              <span>05</span>

              <h3>
                Test drive
              </h3>

              <p>
                Customers want to book
                test drives with minimal effort.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* DESIGN STRATEGY */}

      <section className="case-section section-highlight">

        <div className="container">

          <div className="section-intro">

            <p className="eyebrow">
              06 – DESIGN STRATEGY
            </p>

            <h2>
              Redesigning the journey,
              not just the pages.
            </h2>

            <p>
              The research suggested that several
              problems were connected to friction
              within the customer journey.
            </p>

          </div>

          <div className="arrow-cards">

            <div className="card">
              <span>01</span>
              <h3>Search</h3>
            </div>
             <FiArrowRight aria-hidden="true" />


            <div className="card">
              <span>02</span>
              <h3>Discover</h3>
            </div>
             <FiArrowRight aria-hidden="true" />

            <div className="card">
              <span>03</span>
              <h3>Evaluate</h3>
            </div>
             <FiArrowRight aria-hidden="true" />

            <div className="card">
              <span>04</span>
              <h3>Finance</h3>
            </div>
             <FiArrowRight aria-hidden="true" />

            <div className="card">
              <span>05</span>
              <h3>Test drive</h3>
            </div>
             <FiArrowRight aria-hidden="true" />

            <div className="card">
              <span>06</span>
              <h3>Purchase</h3>
            </div>

          </div>


        </div>

      </section>


      {/* DESIGN */}

      <section className="case-section">

        <div className="container">

          <div className="section-intro">

            <p className="eyebrow">
              07 – DESIGN DELIVERY
            </p>

            <h2>
              Moving from research into
              validated interface concepts.
            </h2>

            <p>
              Initial concepts were presented to
              stakeholders and iterated before
              prototypes were tested with key
              user groups.
            </p>

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
              <h3>Concepts</h3>
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
              <h3>Iterate</h3>
            </div>

          </div>

        </div>

      </section>


      {/* WEBSITE DESIGNS */}

      <section className="case-section section-highlight">

        <div className="container">

          <div className="case-gallery">

            <ImagePlaceholder
              label="Homepage"
              description="Desktop website design"
            />

            <ImagePlaceholder
              label="Homepage"
              description="Mobile website design"
            />

            <ImagePlaceholder
              label="Advanced search"
              description="Desktop search experience"
            />

            <ImagePlaceholder
              label="Advanced search"
              description="Mobile search experience"
            />

            <ImagePlaceholder
              label="Search results"
              description="Desktop results experience"
            />

            <ImagePlaceholder
              label="Search results"
              description="Mobile results experience"
            />

          </div>

        </div>

      </section>


      {/* FINANCE */}

      <section className="case-section">

        <div className="container">

          <div className="section-intro">

            <p className="eyebrow">
              09 – FINANCE
            </p>

            <h2>
              Simplifying a key conversion journey.
            </h2>

          </div>

          <ImagePlaceholder
            label="Finance application"
            description="Redesigned finance journey"
            className="placeholder-large"
          />

        </div>

      </section>


      {/* BRAND */}

      <section className="case-section section-highlight">

        <div className="container">

          <div className="section-intro">

            <p className="eyebrow">
              10 – BRAND EVOLUTION
            </p>

            <h2>
              Evolving the visual identity
              without losing recognition.
            </h2>

            <p>
              The visual language was refined to create
              a more consistent digital experience while
              retaining recognisable CarGiant brand
              characteristics.
            </p>

          </div>

          <div className="case-gallery">

            <ImagePlaceholder
              label="Colour system"
              description="CarGiant brand guidelines"
            />

            <ImagePlaceholder
              label="Typography"
              description="CarGiant brand guidelines"
            />

          </div>

        </div>

      </section>


      {/* ACCESSIBILITY */}

      <section className="case-section">

        <div className="container">

          <div className="section-intro">

            <p className="eyebrow">
              11 – ACCESSIBILITY
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
                Clear sizing and hierarchy
                supporting readability.
              </p>
            </div>

            <div className="card">
              <FiEye className="card-icon" aria-hidden="true" />
              <h3>Contrast</h3>

              <p>
                Foreground and background
                combinations considered
                for readability.
              </p>
            </div>

            <div className="card">
              <FiSmartphone className="card-icon" aria-hidden="true" />
              <h3>Responsive</h3>

              <p>
                Designs adapted across
                desktop, tablet and mobile.
              </p>
            </div>

            <div className="card">
              <FiMenu className="card-icon" aria-hidden="true" />
              <h3>Navigation</h3>

              <p>
                Clear information hierarchy
                and keyboard-friendly
                interaction patterns.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* HANDOFF */}

      <section className="case-section section-highlight">

        <div className="container">

          <div className="section-intro">

            <p className="eyebrow">
              12 – DESIGN HANDOFF
            </p>

            <h2>
              Bridging design and engineering.
            </h2>

          </div>

          <div className="case-grid">

            <div className="case-copy">

              <p>
                Before handoff, I provided the engineering
                team with the necessary design files and
                supporting documentation.
              </p>

              <p>
                I also provided frontend development
                support to backend-focused developers
                where required.
              </p>

            </div>

            <div className="insight-block">

              <span className="eyebrow">
                COLLABORATION
              </span>

              <p>
                Working across design and development
                helped bridge communication between
                technical and non-technical teams and
                maintain alignment throughout delivery.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* OUTCOME */}

      <section className="case-section">

        <div className="container">

          <div className="section-intro">

            <p className="eyebrow">
              13 – OUTCOME
            </p>

            <h2>
              A research-informed redesign
              focused on customer journeys.
            </h2>

          </div>

         <div className="positioning-grid">

            <div className="positioning-item">

              <h3>Research</h3>

              <p>
                Combined stakeholder knowledge,
                interviews, ethnography and
                usability testing.
              </p>
            </div>

          <div className="positioning-item">
                <h3>Experimentation</h3>

              <p>
                Used A/B testing to validate
                specific interface decisions.
              </p>
            </div>

          <div className="positioning-item">
              <h3>UX</h3>

              <p>
                Redesigned key search, finance
                and customer journeys.
              </p>
            </div>

          <div className="positioning-item">
              <h3>Brand</h3>

              <p>
                Evolved the visual identity while
                retaining recognisable characteristics.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* REFLECTION */}

      <section className="case-section section-highlight">

        <div className="container">

          <p className="eyebrow">
            14 – REFLECTION
          </p>

          <h2>
            Improving the journey rather than
            simply redesigning the interface.
          </h2>

          <p>
            The CarGiant project demonstrated the value
            of combining visual design with research,
            experimentation and interaction design.
            Investigating the underlying customer
            journey provided a stronger foundation for
            design decisions than visual redesign alone.
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
            href="/work/constructer"
            className="next-project-link"
          >
            <span>
              Constructer.ai
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