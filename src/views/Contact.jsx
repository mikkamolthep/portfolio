export default function Contact(){
  return(
    <>
      <div>
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
    </>
  )
}
