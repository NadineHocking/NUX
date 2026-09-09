import SkillsGrid from "../../components/SkillsGrid";
import skills from "../../data/skills";

export default function About() {
  return (
    <section className="section page-header">

      <section className="container about-page">
       

          <p className="eyebrow">
            About me
          </p>

          <h1>
            Product Designer <br/>& UI Engineer
          </h1>
          <div className="glass-card y-4">
            <h3>
            Research. Design. Build.
          </h3>
            <p className="page-intro">
              Bringing together psychology, product design, and full-stack development to create digital experiences that are useful, intuitive, and technically considered.
            </p>
          </div>

          <div className="about-copy m-b-4">

            <p>
              I’m a <span className="bold">Product Designer & UI Engineer</span>  with 15+ years of experience creating intuitive, user-centred digital experiences across web and mobile. My work spans <span className="bold">UX research, interaction design, wireframing, prototyping, usability testing, visual design, and frontend development</span> .
            </p>
            <p>
              I recently completed a Full-Stack Developer Bootcamp, strengthening my technical capabilities across <span className="bold">HTML, CSS, JavaScript, React, Node.js, REST APIs, databases, SQL, Python, Git/GitHub, and responsive web development</span>. This has expanded my ability to take ideas from early concepts and prototypes through to functional, production-ready digital experiences.
            </p>
            <p>
              Alongside my design and development work, I’m currently completing a Graduate Diploma of Psychology, further developing my skills in <span className="bold">research, critical analysis, data interpretation, and evidence-based thinking</span>. This combination of design, technology, and psychology allows me to approach product challenges from both a human and technical perspective.
            </p>
            <p>
              I excel at translating complex requirements into <span className="bold">elegant, scalable digital solutions</span> that balance user needs, technical feasibility, and business goals. I enjoy working at the intersection of <span className="bold">research, design, and technology</span> — understanding the problem, designing the experience, and having the technical understanding to bring it to life.
            </p>

        </div>

        

            <section className="skills-section">
               <p className="eyebrow">My Skills</p>
            <h2>What I bring to a team</h2>

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

      </section>

    </section>
  );
}