import "./App.css";

export default function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <h2 className="logo">Shifana Banu</h2>

        <nav>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#internship">Internship</a>
          <a href="#resume">Resume</a>
          <a href="#certificates">certificates</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <h1>Shifana Banu </h1>

        <h3>BCA Student  • React Enthusiast</h3>

        <p>
          Passionate about creating modern, responsive, and user-friendly
          web applications. I enjoy transforming ideas into digital
          experiences through clean design and efficient code.
        </p>

        <div className="hero-buttons">
          <a href="#projects">View Projects</a>

          <a
            href="https://github.com/shifanabanu2008-alt"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/shifana-banu-38228238b"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <h2>About Me</h2>

        <p>
          Hello! I'm Shifana Banu, a BCA student at Jamal Mohamed College
          with a strong passion for Web Development
          I enjoy building responsive websites and learning modern
          technologies that help solve real-world problems.
        </p>

        <p>
          My goal is to become a skilled software developer and contribute
          to innovative digital solutions. I continuously improve my
          technical knowledge through projects, internships, and hands-on
          learning experiences.
        </p>
      </section>

      {/* EDUCATION */}
      <section id="education">
        <h2>Education</h2>

        <div className="card">
          <h3>Bachelor of Computer Applications (BCA)</h3>
          <p>Jamal Mohamed College, Trichy</p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <h2>Skills</h2>

        <div className="skills">
          <span>c</span>
          <span>React JS</span>
          <span>Git</span>
          <span>GitHub</span>
          <span>Responsive design</span>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <h2>Projects</h2>

        <div className="card">
          <h3>SkillSwap Campus Edition</h3>

          <p>
            A student-focused platform that enables learners to exchange
            skills, discover new opportunities, and collaborate within
            their campus community.
          </p>

          <ul>
            <li>Skill sharing and learning</li>
            <li>Student collaboration</li>
            <li>Responsive React interface</li>
            <li>Modern user experience</li>
          </ul>
        </div>

        <div className="card">
          <h3>Personal Portfolio Website</h3>

          <p>
            Designed and developed a modern portfolio website to showcase
            my education, skills, projects, internship experience, and
            professional profile.
          </p>
        </div>
        <div className="card">
          <h3>Apex Motor</h3>

          <p>
            Apex Motor is a high-performance electric motor that gives strong 
            power,smooth speed,and uses less energy
          </p>
        </div>
      </section>

      {/* INTERNSHIP */}
      <section id="internship">
        <h2>Internship</h2>

        <div className="card">
          <h3>Qryptex Internship Program</h3>

          <p>
            Participated in hands-on training and project development
            focused on web technologies, teamwork, and practical software
            development skills.
          </p>
        </div>
      </section>

      {/* RESUME */}
      <section id="resume">
        <h2>Resume</h2>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="resume-btn"
        >
          Download Resume
        </a>
      </section>

      {/*certificates */}
      <section id="certificates">
        <h2>certificates</h2>

        <div className="card">
          <h2>frontend, Backend And Database Integraction  </h2> 
          <p>Levlox tech Ltd - Participation Certificate</p>
          </div>
          
          <div className="card">
            <h2>Frontend React Development</h2>
          <p>Internship Training at Qryptex</p>
          </div>

          <div className="card">
            <h2>More Certificates</h2>
            <p>added soon..</p>
          </div>
        
      </section>
      {/* CONTACT */}
      <section id="contact">
        <h2>Contact</h2>

        <p>
          📧 Email:
          <a 
            href="mailto:shifanabanu2008@gmail.com">
              shifanabanu2008@gmail.com
            </a>
        </p>

        <p>
          💻 GitHub:
          <a
            href="https://github.com/shifanabanu2008-alt"
            target="_blank"
            rel="noreferrer"
          >
            github.com/shifanabanu2008-alt
          </a>
        </p>

        <p>
          🔗 LinkedIn:
          <a
            href="https://www.linkedin.com/in/shifana-banu-38228238b"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/shifana-banu-38228238b
          </a>
        </p>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Shifana Banu | All Rights Reserved</p>
      </footer>

    </div>
  );
}