import NavBar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import CV from '../components/CV'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-zinc-950 text-white">
        <NavBar />
        
        <section id='home'>
          <Hero />
        </section>
        <hr className="mx-16 border-gray-700" />
        <section id='aboutme'>
          <AboutMe />
        </section>
        <hr className="mx-16 border-gray-700" />
        <section id='projects'>
          <Projects />
        </section>
        <hr className="mx-16 border-gray-700" />
        <section id='cv'>
          <CV />
        </section>
        <hr className="mx-16 border-gray-700" />
        <section id='contact'>
          <Contact />
        </section>
        <hr className="py-5 mx-16 border-gray-700" />
      </div>
    </>
  )
}