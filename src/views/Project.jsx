export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>

      <p className="text-gray-400 max-w-2xl mb-12">
        A selection of projects I've worked on, including team projects
        and solo applications that demonstrate my skills in full stack
        web development.
      </p>

      <div className="grid gap-8 sm:grid-cols-2">
        <div className="bg-zinc-900 rounded-xl p-6 shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">
            DevHub
          </h2>

          <p className="text-gray-400 mb-4">
            A full stack web application that simulates a real-world
            development workflow, allowing users to manage projects,
            tasks, and collaboration.
          </p>

          <p className="text-sm text-gray-500 mb-4">
            Role: Full Stack Developer · Team Project
          </p>

          <div className="flex gap-3">
            <a
              href="/projects/devhub"
              className="px-4 py-2 bg-amber-300 text-black rounded-lg text-sm hover:bg-amber-400 transition"
            >
              View Details
            </a>

            <a
              href="https://github.com/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-600 rounded-lg text-sm hover:border-amber-300 transition"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-xl p-6 shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">
            Personal Portfolio
          </h2>

          <p className="text-gray-400 mb-4">
            A personal portfolio website built with React to showcase
            my projects, skills, and experience in a clean and
            professional layout.
          </p>

          <p className="text-sm text-gray-500 mb-4">
            Role: Frontend Developer · Solo Project
          </p>

          <div className="flex gap-3">
            <a
              href="https://github.com/your-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-600 rounded-lg text-sm hover:border-amber-300 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
