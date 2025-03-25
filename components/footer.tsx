import Link from "next/link"
import { Github, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="#home" className="text-xl font-bold">
              Portfolio
            </Link>
            <p className="text-sm text-foreground/70 mt-1">© {new Date().getFullYear()} All rights reserved.</p>
          </div>

          <div className="flex space-x-4">
            <Link
              href="http://github.com/rajsha10"
              target="_blank"
              className="p-2 rounded-full bg-background/80 border border-border/50 text-foreground/70 hover:text-neon-blue hover:border-neon-blue/50 transition-colors"
              aria-label="Github"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://x.com/raj_sharma190"
              target="_blank"
              className="p-2 rounded-full bg-background/80 border border-border/50 text-foreground/70 hover:text-neon-pink hover:border-neon-pink/50 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/raj-sharma-878194259/"
              target="_blank"
              className="p-2 rounded-full bg-background/80 border border-border/50 text-foreground/70 hover:text-neon-green hover:border-neon-green/50 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.instagram.com/r.aaaaaj"
              target="_blank"
              className="p-2 rounded-full bg-background/80 border border-border/50 text-foreground/70 hover:text-neon-blue hover:border-neon-blue/50 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

