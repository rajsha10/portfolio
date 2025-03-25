import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import CustomCursor from "@/components/custom-cursor"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <CustomCursor />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}

