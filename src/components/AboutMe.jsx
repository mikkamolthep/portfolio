export default function AboutMe() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>

      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
        I'm Mik, a junior full stack web developer with an engineering
        background and hands-on working experience.
      </p>

      <p className="text-gray-400 mb-6 leading-relaxed">
        I started my career in engineering roles where I worked with real-world
        processes, problem-solving, and teamwork. Later, I transitioned into
        web development and discovered my passion for building practical web
        applications that people can actually use.
      </p>

      <p className="text-gray-400 mb-10 leading-relaxed">
        I enjoy working across both frontend and backend, understanding how
        systems connect together, and continuously improving my skills through
        real projects.
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
