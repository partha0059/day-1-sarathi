import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import SpaceBackground from "@/components/SpaceBackground"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <SpaceBackground />
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

