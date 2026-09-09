import SkillsGrid from "../../components/SkillsGrid";
import { skills } from "../../data/skills";

export default function About() {
  return (
    <section className="section page-header">

      <div className="container about-page">
       

          <p className="eyebrow">
            About me
          </p>

          <h1>
            Product Designer
            <br />
            & UI Engineer.
          </h1>

          <div className="about-copy container-md">

            <p>
              I'm a multidisciplinary designer with
              15+ years of experience creating digital
              products and user-centred experiences.
            </p>

            <p>
              My practice spans UX research, product
              strategy, interaction design, UI design
              and design systems.
            </p>

            <p>
              More recently, I've expanded into
              full-stack development, working with
              React, Next.js, JavaScript, Node.js
              and databases.
            </p>

        </div>

         <span className="eyebrow m-t-2">My Skills</span>
            <h2>What I bring to a team</h2>

            <section className="skills-section">
              <h2>Skills</h2>

              <SkillsGrid skills={skills} />
            </section>
        

        {/* <div className="skills">

          <div>
            <h3>Design</h3>

            <p>
              UX Research<br />
              Product Design<br />
              UI Design<br />
              Interaction Design<br />
              Design Systems<br />
              Prototyping
            </p>
          </div>

          <div>
            <h3>Development</h3>

            <p>
              HTML / CSS<br />
              JavaScript<br />
              React<br />
              Next.js<br />
              Node.js<br />
              APIs & Databases
            </p>
          </div>

        </div> */}

      </div>

    </section>
  );
}