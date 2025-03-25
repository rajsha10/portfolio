"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Revee - A Product Reviewing Platform | Track Prize Winner",
    description: "Revee is a decentralized review platform that allows users to provide authentic reviews for purchased products and earn crypto tokens as rewards. Reviews are verified using invoice and order ID matching, ensuring credibility. The platform utilizes KYC via ANON Aadhar for secure account creation, preventing spam and fake reviews. Built on blockchain technology, Revee leverages smart contracts on Diamante to manage token transactions, enforce review authenticity, and prevent fraudulent activities. Since brands are often unwilling to share order data, Revee ensures data security while maintaining transparency. Users are incentivized with tokens for submitting genuine reviews, making it a trust-driven platform for both consumers and brands.",
    image: "/images/revee.jpeg",
    tags: ["Next.js", "Solidity", "ANON"],
    liveUrl: "http://raj-portfolio.vercel.app",
    githubUrl: "https://github.com/rajsha10",
  },
  {
    id: 2,
    title: "KapdaGhar | A Brand Shopping Website",
    description: "A brand shopping website built with Next.js and Tailwind CSS provides a sleek, responsive UI for seamless online shopping. It integrates an API for fetching clothing items, ensuring real-time product updates. The backend, powered by Node.js, manages authentication, orders, and inventory. The platform offers a fast, modern shopping experience with secure transactions and smooth navigation.",
    image: "/images/kapdaghar.png",
    tags: ["Next.js", "Tailwind", "Rest API"],
    liveUrl: "http://kapdaghar.vercel.app",
    githubUrl: "https://github.com/rajsha10",
  },
  {
    id: 3,
    title: "Stewry | A Writers and Authors Platform",
    description: "Stewry is a decentralized story-sharing platform where users can publish, own, and monetize their stories using blockchain. Built with Next.js, Tailwind CSS, and Node.js for a seamless UI/UX, it leverages Solidity smart contracts on Ethereum/Polygon for content ownership and tokenized rewards. IPFS ensures decentralized storage, while MetaMask enables secure transactions. ",
    image: "/images/stewry.png",
    tags: ["Ethereum", "Next.js", "solidity"],
    liveUrl: "http://stewry.vercel.app",
    githubUrl: "https://github.com/rajsha10",
  },
  {
    id: 4,
    title: "Book Up | An Event ticket booking site",
    description: "Book AIA is an AI-powered book recommendation and summary platform that helps users discover and understand books quickly. Built with Next.js, Tailwind CSS, and Node.js, it integrates AI/ML models for personalized recommendations and automated summaries. MongoDB handles data storage, ensuring a seamless and intelligent reading experience.",
    image: "/images/bookaia.png",
    tags: ["Vue.js", "Ethereum | AIA", "Solidity"],
    liveUrl: "http://bookaia.vercel.app",
    githubUrl: "https://github.com/rajsha10",
  },
]

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
            <span className="relative z-10">Featured Projects</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-neon-pink/20 -z-10 skew-x-3"></span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore my latest work showcasing creative solutions and technical expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Card className="overflow-hidden border-border/50 bg-background/50 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] transition-all duration-500">
                <div className="relative overflow-hidden aspect-video">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      transform: hoveredId === project.id ? "scale(1.05)" : "scale(1)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-neon-blue/10 text-neon-blue border border-neon-blue/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-neon-blue text-neon-blue hover:bg-neon-blue/10"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-neon-pink text-neon-pink hover:bg-neon-pink/10"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-neon-green text-neon-green hover:bg-neon-green/10">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

