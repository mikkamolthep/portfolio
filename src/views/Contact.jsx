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
          className="flex items-center gap-3 px-5 py-3 bg-amber-200 text-black rounded-lg shadow hover:bg-amber-300 transition"
        >
          <img
            src="GitHub.png"
            alt="GitHub logo"
            className="w-6 h-6 object-cover"
          />
          <span className="font-medium">GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/kamolthep-palee-188815391/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-5 py-3 bg-amber-200 text-black rounded-lg shadow hover:bg-amber-300 transition"
        >
          <img
            src="LinkedIn.png"
            alt="LinkedIn logo"
            className="w-6 h-6 rounded-full object-cover"
          />
          <span className="font-medium">LinkedIn</span>
        </a>

        <a
          href="mailto:mik.kamolthep@gmail.com"
          className="flex items-center gap-3 px-5 py-3 bg-amber-200 text-black rounded-lg shadow hover:bg-amber-300 transition"
        >
          <img
            src="Gmail-Logo.png"
            alt="Gmail logo"
            className="w-5 h-5 object-cover"
          />
          <span className="font-medium">Email</span>
        </a>
      </div>
    </section>
  );
}
