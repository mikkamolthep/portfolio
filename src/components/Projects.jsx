export default function Projects() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>

      <p className="text-gray-400 max-w-2xl mb-12">
        A selection of projects I've worked on, including team projects and solo
        applications that demonstrate my skills in full stack web development.
      </p>

      <div className="grid gap-8 sm:grid-cols-2">
        <div className="bg-zinc-900 rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 hover:scale-105">
          <h2 className="text-2xl font-semibold mb-2">Group Project</h2>

          <p className="text-gray-400 mb-4">
            Developed a full-stack web application that uses AI to generate
            custom images for T-shirt designs, allowing users to create and
            visualize unique artwork before production.
          </p>

          <p className="text-sm text-gray-500 mb-4">
            Role: Full Stack Developer · Team Project
          </p>

          <div className="flex gap-3 flex-wrap">
            <a
              href="https://project-promptprint-react-xi.vercel.app"
              target="_blank"
              className="px-4 py-2 bg-amber-300 text-black rounded-lg text-sm font-semibold hover:bg-amber-400 transition"
            >
              Live Demo
            </a>

            {/* <a
              href="https://github.com/ThJuang2025/project-promptprint-react.git"
              target="_blank"
              className="px-4 py-2 border border-gray-600 rounded-lg text-sm font-semibold hover:border-amber-300 transition"
            >
              Frontend
            </a> */}

            {/* <a
              href="https://github.com/ThJuang2025/project-promptprint-express.git"
              target="_blank"
              className="px-4 py-2 border border-gray-600 rounded-lg text-sm font-semibold hover:border-amber-300 transition"
            >
              Backend
            </a> */}
          </div>
        </div>

        <div className="bg-zinc-900 rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 hover:scale-105">
          <h2 className="text-2xl font-semibold mb-2">Personal Project</h2>

          <p className="text-gray-400 mb-4">
            Developed a web application that helps users search for rental rooms
            and dormitories, allowing them to browse listings, view room
            details, and find accommodations that match their needs.
          </p>

          <p className="text-sm text-gray-500 mb-4">
            Role: Frontend Developer · Solo Project · In Progress
          </p>

          <div className="flex gap-3">
            <a
              href="https://project-promptprint-react-xi.vercel.app"
              target="_blank"
              className="px-4 py-2 bg-amber-300 text-black rounded-lg text-sm font-semibold hover:bg-amber-400 transition"
            >
              Live Demo
            </a>
            {/* <a
              href="https://github.com/your-username/room-finder-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-600 rounded-lg text-sm font-semibold hover:border-amber-300 transition"
            >
              Frontend
            </a> */}
            {/* <a
              href="https://github.com/ThJuang2025/project-promptprint-express.git"
              target="_blank"
              className="px-4 py-2 border border-gray-600 rounded-lg text-sm font-semibold hover:border-amber-300 transition"
            >
              Backend
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
