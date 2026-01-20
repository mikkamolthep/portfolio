export default function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto px-6 text-white">
        <span className="text-gray-400 text-sm tracking-wide uppercase">
          Hi, I'm Mik
        </span>

        <h1 className="text-4xl sm:text-5xl font-bold mt-3 mb-6 leading-tight">
          Junior{" "}
          <strong className="text-amber-300">Full Stack Developer</strong>
        </h1>

        <p className="text-gray-300 max-w-xl leading-relaxed mb-10">
          Junior full-stack developer with an engineering background. I would
          like to build practical web applications and learn how products are
          developed from frontend to backend.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-amber-300 text-black rounded-lg font-medium transition-all duration-200 hover:bg-amber-400 hover:scale-105"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-gray-500 rounded-lg transition-all duration-200 hover:border-amber-300 hover:scale-105 "
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
