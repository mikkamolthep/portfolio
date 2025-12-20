import { Link } from "react-router-dom";

export default function Navbar(){
  return(
    <nav className="max-w-7xl flex justify-between mx-auto px-6 py-4">
      <div className="flex">
        <img src="https://www.placehold.co/50x50" alt="" />
        <span>Portfolio</span>
      </div>
      <div>
        <ul className="flex gap-5">
          <li><Link>Home</Link></li>
          <li><Link>About Me</Link></li>
          <li><Link>Project</Link></li>
          <li><Link>CV</Link></li>
        </ul>
      </div>
    </nav>
  )
}