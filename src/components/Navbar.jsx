export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black z-50">
      <div className="w-full px-6 py-3 flex items-center justify-between">
        <a href="#home" className="hidden md:block">
          <img
            src="/Port-logo.png"
            alt="Port-logo"
            className="w-[50px] h-[50px] object-cover"
          />
        </a>

        <ul className="flex gap-5 flex-nowrap whitespace-nowrap">
          <li className="transition-all duration-200 hover:underline hover:text-amber-300 hover:scale-105">
            <a href="#home">Home</a>
          </li>
          <li className="transition-all duration-200 hover:underline hover:text-amber-300 hover:scale-105">
            <a href="#aboutme">About Me</a>
          </li>
          <li className="transition-all duration-200 hover:underline hover:text-amber-300 hover:scale-105">
            <a href="#projects">Projects</a>
          </li>
          <li className="transition-all duration-200 hover:underline hover:text-amber-300 hover:scale-105">
            <a href="#cv">CV</a>
          </li>
          <li className="transition-all duration-200 hover:underline hover:text-amber-300 hover:scale-105">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
