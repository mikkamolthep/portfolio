export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>

      <p className="text-gray-400 mb-10 max-w-xl">
        Feel free to reach out if you'd like to connect,
        discuss a project, or have any opportunities to share.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
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
              src="/mail-logo.png"
              alt="gmail-logo"
              className="w-[30px] h-[30px] object-cover"
            />
            <span className="text-black font-bold">E-mail</span>
          </a>
      </div>
    </section>
  );
}
