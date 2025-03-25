"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const skills = [
  { name: "React", level: 90, color: "neon-blue" },
  { name: "Next.js", level: 85, color: "neon-blue" },
  { name: "TypeScript", level: 80, color: "neon-blue" },
  { name: "Node.js", level: 75, color: "neon-green" },
  { name: "Three.js", level: 70, color: "neon-green" },
  { name: "Tailwind", level: 90, color: "neon-pink" },
  { name: "UI/UX Design", level: 85, color: "neon-pink" },
  { name: "Solidity", level: 80, color: "neon-pink" },
  { name: "Rust", level: 90, color: "neon-pink" },
  { name: "WSS", level: 90, color: "neon-pink" },
]

const technologies = [
  "JavaScript",
  "HTML5",
  "CSS3",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "REST API",
  "Tailwind CSS",
  "Three.js",
  "Git",
  "GitHub",
  "Figma",
  "Responsive Design",
  "Progressive Web Apps",
  "Serverless",
  "Firebase",
  "Vercel",
  "AWS",
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-neon-green/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-neon-blue/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
            <span className="relative z-10">Skills & Expertise</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-neon-green/20 -z-10 skew-x-3"></span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A combination of technical skills and creative abilities that drive my work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div ref={ref}>
            <h3 className="text-xl font-bold mb-6">Core Competencies</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-foreground/70">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full bg-${skill.color}`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Technologies & Tools</h3>
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1.5 rounded-full bg-background border border-border text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(0, 240, 255, 0.1)",
                    borderColor: "rgba(0, 240, 255, 0.3)",
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

