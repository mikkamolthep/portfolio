// import { Link } from "react-router-dom";

export default function CV() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-white">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Kamolthep Palee (Mik)</h1>
        <span className="text-lg">
          Junior{" "}
          <strong className="text-amber-300">Full Stack Developer</strong>
        </span>

        <p className="mt-2 text-sm text-gray-400 max-w-2xl">
          Junior full-stack developer with an engineering background. I would
          like to build practical web applications and learn how products are
          developed from frontend to backend.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="/CV_Kamolthep_Palee.pdf"
            download
            className="p-2 bg-amber-300 rounded-lg shadow flex items-center gap-2 transition-all duration-200 hover:bg-amber-400 hover:scale-105"
          >
            <span className="text-black font-bold">Download CV</span>
          </a>

          <a
            href="https://github.com/mikkamolthep?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-amber-200 rounded-lg shadow flex items-center gap-2 transition-all duration-200 hover:bg-amber-300 hover:scale-105"
          >
            <img
              src="/GitHub.png"
              alt="github-logo"
              className="w-[25px] h-[25px] object-cover"
            />
            <span className="text-black font-bold">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/kamolthep-palee-188815391/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-amber-200 rounded-lg shadow flex items-center gap-2 transition-all duration-200 hover:bg-amber-300 hover:scale-105"
          >
            <img
              src="/LinkedIn.png"
              alt="linkedin-logo"
              className="w-[25px] h-[25px] rounded-full object-cover"
            />
            <span className="text-black font-bold">LinkedIn</span>
          </a>

          <a
            href="mailto:mik.kamolthep@gmail.com"
            className="p-2 bg-amber-200 rounded-lg shadow flex items-center gap-2 transition-all duration-200 hover:bg-amber-300 hover:scale-105"
          >
            <img
              src="/Gmail-Logo.png"
              alt="gmail-logo"
              className="w-[20px] h-[20px] object-cover"
            />
            <span className="text-black font-bold">Email</span>
          </a>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-amber-300 underline pt-5">
          TECHNICAL SKILLS
        </h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Front-End :</strong> HTML, CSS, JavaScript (ES6+), React,
            Tailwind CSS
          </li>
          <li>
            <strong>Back-End :</strong> Node.js, Express.js, RESTful APIs,
            PostgreSQL, MongoDB
          </li>
          <li>
            <strong>Tools :</strong> Git, GitHub, VS Code, Postman
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-amber-300 underline pt-5">
          LANGUAGE
        </h3>
        <p>
          <strong>English :</strong> TOEIC 615
        </p>
        <span className="text-sm text-gray-500">17 February 2023</span>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-amber-300 underline pt-5">
          EDUCATION
        </h3>

        <h4 className="font-semibold">
          Generation Thailand – Junior Software Developer
        </h4>
        <span className="text-sm text-gray-500">Oct 2025 – Jan 2026</span>
        <p className="mt-1 max-w-3xl text-gray-300">
          Completed an intensive full-stack software development bootcamp
          covering HTML, CSS, JavaScript, React, Node.js/Express.js, and
          databases (PostgreSQL & MongoDB). Built RESTful APIs and collaborated
          in Agile team-based projects using Git and GitHub.
        </p>

        <h4 className="font-semibold mt-4">
          Bachelor of Engineering – Materials Engineering (Polymers)
        </h4>
        <span className="text-sm text-gray-500">2017 – 2019</span>
        <p>Rajamangala University of Technology</p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-amber-300 underline pt-5">
          EXPERIENCE
        </h3>

        <h4 className="font-semibold">R&D Engineer – TS Interseats</h4>
        <span className="text-sm text-gray-500">August 2024 – March 2025</span>

        <ul className="list-disc pl-6 mt-2 space-y-1 max-w-3xl text-gray-300">
          <li>
            Conducted research and development to improve motorcycle seat
            materials, focusing on performance, durability, and cost
            optimization.
          </li>
          <li>
            Collaborated with suppliers and internal teams to test foam and PVC
            materials and analyze experimental results.
          </li>
          <li>
            Prepared technical documentation and reports to support product
            development and continuous improvement initiatives.
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2 text-amber-300 underline pt-5">
          SOFT SKILLS
        </h3>
        <ul className="list-disc pl-6 text-gray-300">
          <li className="py-1">Teamwork</li>
          <li className="py-1">Problem-solving</li>
          <li className="py-1">Open to feedback</li>
        </ul>
      </div>
    </div>
  );
}
