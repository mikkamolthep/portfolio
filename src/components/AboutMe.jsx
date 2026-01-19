export default function AboutMe() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>

      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
        I'm Mik, a junior full-stack web developer with an engineering
        background and hands-on professional experience.
      </p>

      <p className="text-gray-400 mb-6 leading-relaxed">
        I previously worked in an R&D role related to motorcycle seat materials,
        focusing on testing, analysis, and process improvement.
      </p>

      <p className="text-gray-400 mb-10 leading-relaxed">
        This experience helped me build a structured approach to
        problem-solving, which I now apply to my web development projects.
      </p>

      <div>
        <h2 className="text-2xl font-semibold mb-4">What I'm good at</h2>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>Breaking down problems into clear and manageable tasks</li>
          <li>Building full stack applications from frontend to backend</li>
          <li>Working with teams and communicating technical ideas clearly</li>
          <li>Learning new technologies and improving continuously</li>
        </ul>
      </div>
    </section>
  );
}
