// import { Link } from "react-router-dom";

export default function CV() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-4">
      <div>
        <h1>Kamolthep Palee (Mik)</h1>
        <span>
          Junior <strong>Full Stack Developer</strong>
        </span>
        <div className="flex gap-2">
          <a
            href="https://github.com/mikkamolthep?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-amber-200 rounded-lg shadow flex items-center gap-2"
          >
            <img
              src="/GitHub.png"
              alt="github-logo"
              className="w-[25px] h-[25px] object-cover"
            />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/kamolthep-palee-188815391/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-amber-200 rounded-lg shadow flex items-center gap-2"
          >
            <img
              src="/LinkedIn.png"
              alt="linkedin-logo"
              className="w-[25px] h-[25px] rounded-full object-cover"
            />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:mik.kamolthep@gmail.com"
            className="p-2 bg-amber-200 rounded-lg shadow flex items-center gap-2"
          >
            <img
              src="/Gmail-Logo.png"
              alt="gmail-logo"
              className="w-[20px] h-[20px] object-cover"
            />
            E-mail
          </a>
        </div>
      </div>

      <div>
        <h3>
          TECHNICAL SKILLS
        </h3>
        <ul>
          <li><strong>Front-End : </strong>HTML, CSS, JavaScript, React</li>
          <li className=" bg-red-400"><strong>Back-End : </strong> อย่าลืมมาเติม</li>
          <li><strong>Tools : </strong>GitHub</li>
        </ul>
      </div>

      <div>
        <h3>LANGUAGE</h3>
        <span><strong>TOEIC :</strong> 615</span>
      </div>

      <div>
        <h3>EDUCATION</h3>
        <h4>Generation Thailand – Junior Software Developer</h4>
        <span>Oct 2025 – Jan 2026</span>
        <p>Completed intensive full-stack training covering HTML, CSS, JavaScript, ReactJS, Node.js/Express.js, and PostgreSQL/MongoDB, with hands-on RESTful API development. Experienced in Git/GitHub and Agile collaboration through team-based projects.</p>

        <h4>Bachelor of Engineering – Materials Engineering (Polymers)</h4>
        <span>2017-2019</span>
        <p>Rajamangala University of Technology</p>
      </div>

      <div>
        <h3>EXPERIENCE</h3>
        <h4>TS interseats-R&D Engineer</h4>
        <span>August 2024 - March 2025</span>
        <ol>
          <li>Conducted R&D to improve motorcycle seat materials, optimize production costs, and evaluate foam/PVC properties through trials and supplier coordination.</li>
          <li>Documented experimental results for product development projects and supported other departments with technical data and reports, contributing to continuous improvement activities.</li>
        </ol>
      </div>

      <div>
        <h3>SOFT SKILLS</h3>
        <ol>
          <li>Teamwork</li>
          <li>Open to feedback</li>
          <li>Problem ownership</li>
          <li>Professional work ethic</li>
        </ol>
      </div>
    </div>
  );
}
