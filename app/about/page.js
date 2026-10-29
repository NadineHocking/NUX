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
          {/* <div className="glass-card y-4">
            <h3>
            Research. Design. Build.
          </h3>
            <p className="page-intro">
              Bringing together psychology, product design, and full-stack development to create digital experiences that are useful, intuitive, and technically considered.
            </p>
          </div> */}

          <div className="about-copy spacer-inner-t">
            <p className="bold">
              I’m a Product Designer & UI Engineer with 15 years of experience designing digital products and user experiences across web and mobile.
            </p>

            <p>I combine UX research, product thinking, interaction design and visual design with hands-on front-end and full-stack development. This allows me to work across the product lifecycle: from understanding user and business needs, through research and UX, to UI design, prototyping and implementation.</p>

            <p>I’ve worked with startups and established businesses across complex digital products, including B2B SaaS, insurtech, construction technology and digital platforms. As a founding designer at Insurwave, I helped shape a complex insurance platform used by multiple user groups. More recently, through my independent consultancy, I’ve worked with startups including Constructer.ai, combining product design, branding, UX and development to help bring products from concept to working digital experiences.</p>

            <p>My technical background includes HTML, CSS/SCSS, JavaScript, React, Next.js, Node.js, REST APIs, databases, SQL, Python and Git/GitHub. I enjoy working closely with developers and can bridge the gap between design intent and technical implementation.</p>

            <p>Alongside my design and technical skills, I also have a strong foundation in Psychology, which strengthens my understanding of research, human behaviour and evidence-based approaches to problem solving.</p>

            <p>My work is informed by a human-centred approach, and I’m passionate about creating digital products that are useful, usable and accessible. I’m particularly interested in how design and technology can be used to improve people’s lives, and how we can create digital experiences that are inclusive, ethical and sustainable.</p>

            <p>I’m also interested in the intersection of design, technology and AI. I actively use generative AI in my design and development workflow, including Claude and Lovable, for research, ideation, prototyping, technical exploration and development. I’m particularly interested in how AI can improve the way products are designed, built and experienced — while keeping human needs and good design judgement at the centre.</p>

            <p>I’m currently available for opportunities across:</p>

            <ul>
              <li className="bold">Product & UX design</li>
              <li className="bold">UX research</li>
              <li className="bold">UI and interaction design</li>
              <li className="bold">Design systems</li>
              <li className="bold">Front-end development</li>
              <li className="bold">Design-to-development</li>
              <li className="bold">Early-stage product / startup work</li>
              <li className="bold">AI-assisted design & development</li>
            </ul>
        </div>

        <div className="skills-section spacer-t">
            <p className="eyebrow">My Skills</p>
        <h2>What I bring to a team</h2>

          <SkillsGrid skills={skills} />
        </div>
        

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