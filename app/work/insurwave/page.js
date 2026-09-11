import Link from "next/link";
import {
  FiArrowLeft,
  FiArrowRight,
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

export default function InsurwaveCaseStudy() {
  return (
    <article className="case-study insurwave-case-study">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="case-section case-hero">
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
              Insurwave
            </span>
          </div>

          <div className="case-hero-content">

            <div className="eyebrow">
              Product Design · UX Research · UI · Front-end
            </div>

            <h1>
              Designing the foundations of a new insurance platform.
            </h1>

            <p className="case-hero-intro">
              Helping transform complex specialty-insurance workflows
              into a clearer, more efficient and user-centred product
              experience.
            </p>

            <div className="case-meta">

              <div>
                <span>Role</span>
                <strong>Founding UI/UX Designer</strong>
              </div>

              <div>
                <span>Industry</span>
                <strong>Insurtech</strong>
              </div>

              <div>
                <span>Product</span>
                <strong>B2B SaaS</strong>
              </div>

              <div>
                <span>Timeline</span>
                <strong>2020–2022</strong>
              </div>

            </div>

          </div>

          <ImagePlaceholder
            label="Hero product screen"
            description="Strongest final Insurwave interface or product overview"
            className="placeholder-hero"
          />

        </div>
      </section>


      {/* =====================================================
          OVERVIEW
      ===================================================== */}

      <section className="case-section">
        <div className="container">

          <div className="section-intro">

            <div className="eyebrow">
              Overview
            </div>

            <h2>
              Making complex insurance workflows easier to understand,
              manage and act on.
            </h2>

          </div>

          <div className="case-grid case-grid-2">

            <div className="case-copy">

              <p>
                Insurwave was an early-stage B2B insurtech platform
                designed to connect insurance buyers, brokers and
                insurers while making complex insurance data easier
                to manage and understand.
              </p>

              <p>
                As the founding UI/UX designer, I worked across
                research, UX strategy, interaction design, visual
                design and front-end delivery to help evolve the
                product experience.
              </p>

            </div>

            <div className="case-copy">

              <h3>
                The opportunity
              </h3>

              <p>
                Improve existing journeys, introduce more self-service
                capabilities and create a clearer way for users to
                understand and manage their assets.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          THE CHALLENGE
      ===================================================== */}

      <section className="case-section case-muted">
        <div className="container">
          <div className="section-intro">
            <div className="eyebrow">
              01 — The challenge
            </div>

            <h2>
              How do you simplify a complex B2B insurance product
              without hiding the complexity users need?
            </h2>

              <p>
                Specialty insurance involves multiple stakeholders,
                complex processes and large volumes of information.
              </p>

              <p>
                The challenge was not simply to make the interface
                look simpler. It was to help users understand the
                relationships between assets, policies, risks and
                actions while reducing unnecessary friction.
              </p>
          </div>

          <div className="card-container">
            <div className="card">
                <h3 className="card-title">Complex workflows</h3>
                <p>
                    Multiple tasks and stakeholders across the
                    insurance lifecycle.
                </p>
            </div>
      
            <div className="card">
                <h3>Fragmented information</h3>
                <p>
                    Important information could be difficult to
                    locate and connect.
                </p>
            </div>
            <div className="card">
                <h3>Backend dependency</h3>
                <p>
                    Some processes relied heavily on backend teams.
                </p>
            </div>
            <div className="card">
                <h3>Limited self-service</h3>
                <p>
                    Opportunity to give users greater control over
                    their workflows.
                </p>
            </div>
          </div>
        </div>

      </section>


      {/* =====================================================
          MY ROLE
      ===================================================== */}

      <section className="case-section">
        <div className="container">

          <div className="section-intro">

            <div className="eyebrow">
              02 — My role
            </div>

            <h2>
              Establishing the UX practice while designing the product.
            </h2>

            <p>
              As the founding UI/UX designer, I wasn't simply given
              individual features to design. I helped establish the
              design process while working autonomously with product,
              client-success and engineering teams.
            </p>

          </div>

          <div className="arrow-cards">

            <div className="card">
              <span className="small-number">01</span>
              <h3 className="card-title">Research</h3>
              <p className="card-description">
                Business research, user research, field research,
                desk research and stakeholder workshops.
              </p>
            </div>
            <FiArrowRight aria-hidden="true" />

            <div className="card">
              <span className="small-number">02</span>
              <h3 className="card-title">Strategy</h3>
              <p className="card-description">
                Personas, hypotheses, user journeys and information
                architecture.
              </p>
            </div>
            <FiArrowRight aria-hidden="true" />
            <div className="card">
              <span className="small-number">03</span>
              <h3 className="card-title">Design</h3>
              <p className="card-description">
                Flows, wireframes, prototypes, UI and interaction
                design.
              </p>
            </div>
            <FiArrowRight aria-hidden="true" />
            <div className="card">
              <span className="small-number">04</span>
              <h3 className="card-title">Validation</h3>
              <p className="card-description">
                Stakeholder review, user testing and iteration.
              </p>
            </div>
            <FiArrowRight aria-hidden="true" />
            <div className="card">
              <span className="small-number">05</span>
              <h3 className="card-title">Delivery</h3>
               <p className="card-description">
                Design specifications, engineering collaboration
                and front-end implementation.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          BUSINESS RESEARCH
      ===================================================== */}

      <section className="case-section case-muted">
        <div className="container">

          <div className="section-intro">

            <div className="eyebrow">
              03 — Understand the business
            </div>

            <h2>
              Starting with the business before designing the interface.
            </h2>

            <p>
              I began by working with senior stakeholders and
              cross-functional teams to understand the product vision,
              existing experience and opportunities for improvement.
            </p>

          </div>

          <div className="card-container">

            <div className="card">
              <span>01</span>
              <h3>Strengths</h3>
              <p>
                What was already working within the product and
                business?
              </p>
            </div>

            <div className="card">
              <span>02</span>
              <h3>Weaknesses</h3>
              <p>
                Where were users experiencing friction?
              </p>
            </div>

            <div className="card">
              <span>03</span>
              <h3>Opportunities</h3>
              <p>
                Where could product and UX design create value?
              </p>
            </div>

            <div className="card">
              <span>04</span>
              <h3>Vision</h3>
              <p>
                What did stakeholders want the platform to become?
              </p>
            </div>

          </div>

          <ImagePlaceholder
            label="Existing product / known pains"
            description="Screenshots of the existing experience with annotated friction points"
            className="placeholder-large"
          />

        </div>
      </section>


      {/* =====================================================
          USER RESEARCH
      ===================================================== */}

      <section className="case-section">
        <div className="container">

          <div className="section-intro">

            <div className="eyebrow">
              04 — Understand the users
            </div>

            <h2>
              Understanding the people behind the workflows.
            </h2>

            <p>
              Research explored the different roles involved in
              specialty insurance and the tasks, goals, behaviours
              and pain points associated with each.
            </p>

          </div>

          <div className="card-container">

            <div className="card">
              <span className="eyebrow">
                User group 01
              </span>

              <h3>Insurance Buyer</h3>

              <p>
                Understanding risk, assets and insurance requirements
                while coordinating with other stakeholders.
              </p>
            </div>

            <div className="card">
              <span className="eyebrow">
                User group 02
              </span>

              <h3>Broker</h3>

              <p>
                Managing relationships, policies, quotes and
                communication between parties.
              </p>
            </div>

            <div className="card">
              <span className="eyebrow">
                User group 03
              </span>

              <h3>Insurer</h3>

              <p>
                Assessing risk, managing policies and making
                informed decisions around assets.
              </p>
            </div>

          </div>

          <div className="research-method">

            <h2>
              Research approach
            </h2>

            <div className="arrow-cards">

              <div className="card">
                <span>01</span>
                <h3>Desk research</h3>
                <p>
                  Insurance industry, terminology and existing
                  product knowledge.
                </p>
              </div>
              <FiArrowRight aria-hidden="true" />
              <div className="card">
                <span>02</span>
                <h3>Field research</h3>
                <p>
                  Interviews and observation within users'
                  working environments.
                </p>
              </div>
              <FiArrowRight aria-hidden="true" />
              <div className="card">
                <span>03</span>
                <h3>Discovery sessions</h3>
                <p>
                  Blank canvasing and collaborative exploration.
                </p>
              </div>
              <FiArrowRight aria-hidden="true" />
              <div className="card">
                <span>04</span>
                <h3>Synthesis</h3>
                <p>
                  Tasks, goals, behaviours, tools, stakeholders
                  and pain points.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          KEY INSIGHT
      ===================================================== */}

      <section className="case-section case-muted">
        <div className="container">

          <div className="section-intro">

            <div className="eyebrow">
              05 — Key insight
            </div>

            <h2>
              From policy-centric to asset-centric.
            </h2>

          </div>

          <div className="positioning-grid">

            <div className="positioning-item">
              <span>BEFORE</span>

              <h3>
                Fragmented workflows
              </h3>

              <p>
                Users often needed to navigate between different
                areas of the product to complete related tasks.
              </p>
            </div>

            <div className="positioning-arrow">
              →
            </div>

            <div className="positioning-item">
              <span>INSIGHT</span>

              <h3>
                Users think about the asset
              </h3>

              <p>
                Multiple tasks and decisions could be connected
                through the asset at the centre of the workflow.
              </p>
            </div>

            <div className="positioning-arrow">
              →
            </div>

            <div className="positioning-item">
              <span>RESPONSE</span>

              <h3>
                Asset-centric experience
              </h3>

              <p>
                Bring relevant information, actions and context
                together around the asset.
              </p>
            </div>

          </div>

          <ImagePlaceholder
            label="Before → after information architecture"
            description="Show the transition from existing structure to asset-centric experience"
            className="placeholder-large"
          />

        </div>
      </section>


      {/* =====================================================
          HYPOTHESES
      ===================================================== */}

      <section className="case-section">
        <div className="container">

          <div className="section-intro">

            <div className="eyebrow">
              06 — Define what to solve
            </div>

            <h2>
              Turning research into design hypotheses.
            </h2>

            <p>
              The research was translated into a series of hypotheses
              that connected user needs with potential product
              opportunities.
            </p>

          </div>

          <div className="card-container">

            <div className="card">
              <span>01</span>
              <h3>Risk awareness</h3>
              <p>
                Users want to know when an asset enters a war zone.
              </p>
            </div>

            <div className="card">
              <span>02</span>
              <h3>Risk visibility</h3>
              <p>
                Users want to see an asset's journey through a
                war zone.
              </p>
            </div>

            <div className="card">
              <span>03</span>
              <h3>Risk exploration</h3>
              <p>
                Users need to see assets within a specific zone
                and timeframe.
              </p>
            </div>

            <div className="card">
              <span>04</span>
              <h3>Proactive action</h3>
              <p>
                Users want the ability to generate quotes before
                entering a war zone.
              </p>
            </div>

            <div className="card">
              <span>05</span>
              <h3>Efficiency</h3>
              <p>
                Users need to complete multiple tasks in less time.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          USER JOURNEYS
      ===================================================== */}

      <section className="case-section case-muted">
        <div className="container">

          <div className="section-intro">

            <div className="eyebrow">
              07 — Design the experience
            </div>

            <h2>
              Turning insights into user journeys.
            </h2>

          </div>

          <div className="case-grid case-grid-2">

            <div className="case-copy">

            <h3 className="subheading">
                Primary journey
              </h3>

              <p>
                The strongest product story centred around helping
                users track an asset, identify risk, understand its
                impact and take action.
              </p>

              <div className="v-journey">

                <div>Track asset</div>
                <span>↓</span>

                <div>Identify risk</div>
                <span>↓</span>

                <div>Understand impact</div>
                <span>↓</span>

                <div>Take action</div>

              </div>

            </div>

            <ImagePlaceholder
              label="Primary user journey"
              description="Detailed journey / flowchart"
              className="placeholder-large"
            />

          </div>

          <div className="secondary-journeys">

            <h3 className="subheading">
              Supporting journeys
            </h3>

            <div className="arrow-cards">

              <div className="card">
                <strong>01 </strong>
                Track vessels
              </div>
            <FiArrowRight aria-hidden="true" />

              <div className="card">
                <strong>02 </strong>
                Filter content within the risk map
              </div>
            <FiArrowRight aria-hidden="true" />

              <div className="card">
                <strong>03 </strong>
                Create an agreed-rates quote
              </div>
            <FiArrowRight aria-hidden="true" />

              <div className="card">
                <strong>04 </strong>
                Receive and view asset changes
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          PROTOTYPING + TESTING
      ===================================================== */}

      <section className="case-section">
        <div className="container">

          <div className="section-intro">

            <div className="eyebrow">
              08 — Validate
            </div>

            <h2>
              Prototype → test → refine.
            </h2>

            <p>
              Rather than moving directly into high-fidelity UI,
              concepts were reviewed with stakeholders and key
              user groups before being refined.
            </p>

          </div>

          <div className="card-container">

            <div className="card">
              <span>01</span>
              <h3>Concept</h3>
              <p>
                Explore possible approaches to the problem.
              </p>
            </div>

            <div className="card">
              <span>02</span>
              <h3>Low fidelity</h3>
              <p>
                Establish structure and interaction.
              </p>
            </div>

            <div className="card">
              <span>03</span>
              <h3>Stakeholder review</h3>
              <p>
                Test the direction against business requirements.
              </p>
            </div>

            <div className="card">
              <span>04</span>
              <h3>User testing</h3>
              <p>
                Present concepts to relevant user groups.
              </p>
            </div>

            <div className="card">
              <span>05</span>
              <h3>Iteration</h3>
              <p>
                Refine the experience based on feedback.
              </p>
            </div>

          </div>

          <ImagePlaceholder
            label="Prototype evolution"
            description="Low-fidelity → prototype → refined UI"
            className="placeholder-wide"
          />

        </div>
      </section>


      {/* =====================================================
          INFORMATION ARCHITECTURE
      ===================================================== */}

      <section className="case-section case-muted">
        <div className="container">

          <div className="section-intro">

            <div className="eyebrow">
              09 — Information architecture
            </div>

            <h2>
              Restructuring the product around how users work.
            </h2>

            <p>
              Research revealed the need for clearer relationships
              between assets, policies, risk information and actions.
              This informed a reassessment of the information
              architecture, navigation and filtering.
            </p>

          </div>

          <div className="case-grid case-grid-2">

            <ImagePlaceholder
              label="Existing information architecture"
              description="Original sitemap / navigation"
              className="placeholder-large"
            />

            <ImagePlaceholder
              label="Updated information architecture"
              description="Asset-centric structure and navigation"
              className="placeholder-large"
            />

          </div>

          <div className="insight-block">

            <span>DESIGN DECISION</span>

            <h3 className="subheading">
              Make the asset the centre of the experience.
            </h3>

            <p>
              An asset-centric structure created a clearer relationship
              between information and actions, helping users complete
              related workflows with less navigation.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          UI DESIGN
      ===================================================== */}

      <section className="case-section">
        <div className="container">

          <div className="section-intro">

            <div className="eyebrow">
              10 — UI design
            </div>

            <h2>
              From structure to interface.
            </h2>

            <p>
              Once the underlying experience was established, I
              translated the journeys and information architecture
              into a scalable interface system.
            </p>

          </div>

          <div className="case-grid case-grid-2">

            <ImagePlaceholder
              label="Wireframes"
              description="Early structural explorations"
              className="placeholder-large"
            />

            <ImagePlaceholder
              label="High-fidelity UI"
              description="Final interface designs"
              className="placeholder-large"
            />

          </div>

          <div className="case-gallery">

            <ImagePlaceholder
              label="Dashboard"
              description="Product dashboard"
            />

            <ImagePlaceholder
              label="Asset view"
              description="Asset-centric experience"
            />

            <ImagePlaceholder
              label="Risk map"
              description="Risk visualisation"
            />

            <ImagePlaceholder
              label="Filters"
              description="Filtering and navigation"
            />

            <ImagePlaceholder
              label="Policy information"
              description="Policy interface"
            />

            <ImagePlaceholder
              label="Notifications"
              description="Asset / risk notifications"
            />

          </div>

        </div>
      </section>


      {/* =====================================================
          ACCESSIBILITY
      ===================================================== */}

      <section className="case-section case-muted">
        <div className="container">

          <div className="section-intro">

            <div className="eyebrow">
              11 — Accessibility
            </div>

            <h2>
              Designing for clarity and accessibility.
            </h2>

          </div>

          <div className="card-container">

            <div className="card">
              <h3>Typography</h3>
              <p>
                Clear hierarchy and readable type.
              </p>
            </div>

            <div className="card">
              <h3>Contrast</h3>
              <p>
                Appropriate colour contrast across interface elements.
              </p>
            </div>

            <div className="card">
              <h3>Content visibility</h3>
              <p>
                Important information remains easy to locate and
                interpret.
              </p>
            </div>

            <div className="card">
              <h3>Responsive behaviour</h3>
              <p>
                Interfaces designed to adapt across screen sizes.
              </p>
            </div>

            <div className="card">
              <h3>Interaction</h3>
              <p>
                Clear states and predictable interaction patterns.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          DESIGN → ENGINEERING
      ===================================================== */}

      <section className="case-section case-muted">
        <div className="container">

          <div className="section-intro">

            <div className="eyebrow">
              12 — Design → engineering
            </div>

            <h2>
              Designing with implementation in mind.
            </h2>

            <p>
              Design wasn't the end of my involvement. I worked
              closely with front-end engineers to help translate
              the experience into the product.
            </p>

          </div>

          <div className="arrow-cards">

            <div className="card">
              <span>01</span>
              <h3>Figma</h3>
              <p>
                User journeys, wireframes, UI and prototypes.
              </p>
            </div>
            <FiArrowRight aria-hidden="true" />
            <div className="card">
              <span>02</span>
              <h3>Specification</h3>
              <p>
                Content, fonts, icons, styles and interaction
                specifications.
              </p>
            </div>
            <FiArrowRight aria-hidden="true" />
            <div className="card">
              <span>03</span>
              <h3>Front-end</h3>
              <p>
                Translating interface patterns into working UI.
              </p>
            </div>
            <FiArrowRight aria-hidden="true" />
            <div className="card">
              <span>04</span>
              <h3>Engineering</h3>
              <p>
                Collaborating with developers throughout delivery.
              </p>
            </div>
            <FiArrowRight aria-hidden="true" />
            <div className="card">
              <span>05</span>
              <h3>Production</h3>
              <p>
                Reviewing the implemented experience and iterating.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FIGMA → PRODUCT
      ===================================================== */}

      <section className="case-section">
        <div className="container">

          <div className="section-intro">

            <div className="eyebrow">
              13 — Design in production
            </div>

            <h2>
              From Figma to product.
            </h2>

            <p>
              A key part of my role was bridging the gap between
              design intent and technical implementation.
            </p>

          </div>

          <div className="case-grid case-grid-2">

            <div>

              <ImagePlaceholder
                label="Figma"
                description="Original high-fidelity design"
                className="placeholder-large"
              />

              <h3 className="m-t-2">
                Designed
              </h3>

              <p>
                Component structure, spacing, typography,
                interaction states and responsive behaviour.
              </p>

            </div>

            <div>

              <ImagePlaceholder
                label="Production"
                description="Implemented product interface"
                className="placeholder-large"
              />

               <h3 className="m-t-2">
                Implemented
              </h3>

              <p>
                Working interface translated through collaboration
                with front-end engineering.
              </p>

            </div>

          </div>

          <div className="insight-block">

            <span>DESIGN ENGINEERING</span>

            <h3 className="subheading">
              Designing within technical constraints.
            </h3>

            <p>
              Working closely with engineering helped identify
              implementation constraints early, refine designs
              collaboratively and maintain consistency between
              the intended and delivered experience.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          MEASUREMENT
      ===================================================== */}

      <section className="case-section case-muted">
        <div className="container">

          <div className="section-intro">

            <div className="eyebrow">
              14 — Measurement
            </div>

            <h2>
              Learning from how people use the product.
            </h2>

            <p>
              Product analytics and qualitative feedback were used
              to understand behaviour and identify opportunities
              for continued improvement.
            </p>

          </div>

          <div className="card-column">

            <div className="card">
              <span>BEHAVIOUR</span>
              <h3>Session behaviour</h3>
              <p>
                Understanding how users moved through the product.
              </p>
            </div>

            <div className="card">
              <span>EFFICIENCY</span>
              <h3>Task completion</h3>
              <p>
                Looking at task length and user friction.
              </p>
            </div>

            <div className="card">
              <span>ENGAGEMENT</span>
              <h3>Feature usage</h3>
              <p>
                Understanding which capabilities users engaged with.
              </p>
            </div>

            <div className="card">
              <span>QUALITATIVE</span>
              <h3>User feedback</h3>
              <p>
                Combining behavioural data with user observations
                and feedback.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          OUTCOME
      ===================================================== */}

      <section className="case-section case-muted">
        <div className="container">

          <div className="section-intro">

            <div className="eyebrow">
              15 — Outcome
            </div>

            <h2>
              Building a more user-centred foundation for Insurwave.
            </h2>

          </div>

          <div className="outcome-grid">

            <div className="case-outcome">
              <h3>
                More user-centred product direction
              </h3>

              <p>
                Research created a stronger understanding of the
                three core user groups and their workflows.
              </p>
            </div>

            <div className="case-outcome">
              <h3>
                More efficient workflows
              </h3>

              <p>
                The asset-centric approach created a clearer route
                through related tasks.
              </p>
            </div>

            <div className="case-outcome">
              <h3>
                Greater self-service
              </h3>

              <p>
                The product moved towards reducing dependency on
                backend processes.
              </p>
            </div>

            <div className="case-outcome">
              <h3>
                Scalable UX foundation
              </h3>

              <p>
                Journeys, IA, prototypes and design patterns provided
                a foundation for continued product development.
              </p>
            </div>

            <div className="case-outcome">
              <h3>
                Stronger design–engineering collaboration
              </h3>

              <p>
                Design was carried through into implementation through
                close collaboration with engineering.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          REFLECTION
      ===================================================== */}

      <section className="case-section case-reflection">
        <div className="container">

          <div className="section-intro">

            <div className="eyebrow">
              16 — Reflection
            </div>

            <h2>
              What I learned as a founding designer.
            </h2>

          </div>

          <div className="case-copy case-copy-wide">

            <p className="case-lead">
              Working as the founding UI/UX designer meant there was
              no established design process to simply follow. I had
              to help create the process while simultaneously
              delivering product work.
            </p>

            <p>
              That meant moving between stakeholder discovery,
              user research, product strategy, information
              architecture, interaction design, prototyping,
              testing and implementation.
            </p>

            <p>
              The experience reinforced something that has remained
              central to my approach to product design:
            </p>

            <blockquote>
              Good UX isn't about removing complexity.
              It's about making complexity understandable
              and actionable for the people who need to work with it.
            </blockquote>

          </div>

        </div>
      </section>


      {/* =====================================================
          GALLERY
      ===================================================== */}

      <section className="case-section">
        <div className="container">

          <div className="section-intro">

            <div className="eyebrow">
              Product gallery
            </div>

            <h2>
              Selected Insurwave interfaces.
            </h2>

          </div>

          <div className="case-gallery">

            <ImagePlaceholder
              label="Dashboard"
            />

            <ImagePlaceholder
              label="Asset experience"
            />

            <ImagePlaceholder
              label="Risk map"
            />

            <ImagePlaceholder
              label="Policy management"
            />

            <ImagePlaceholder
              label="Notifications"
            />

            <ImagePlaceholder
              label="Quote workflow"
            />

          </div>

        </div>
      </section>


      {/* =====================================================
          NEXT PROJECT
      ===================================================== */}

      <section className="case-section next-project">

        <div className="container">

          <div className="eyebrow">
            Next project
          </div>

          <h2>
            Constructer.ai
          </h2>

          <p>
            Designing and building the digital foundation for an
            AI construction intelligence startup.
          </p>

          <Link
            href="/work/constructer"
            className="button button-primary"
          >
            <span>
              View case study
            </span>

            <span aria-hidden="true">
              →
            </span>
          </Link>

        </div>

      </section>

    </article>
  );
}