"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

const projects = [
  {
    title: "Cosmic Tracker",
    description: "Track your space adventures and analyze your performance",
    image: "/images/cosmic-tracker.jpg",
    icon: "🚀",
  },
  {
    title: "Nebula Forecast",
    description: "Real-time cosmic weather conditions for popular galaxies",
    image: "/images/nebula-forecast.jpg",
    icon: "🌌",
  },
  {
    title: "Astro Hub",
    description: "Connect with other space enthusiasts and share experiences",
    image: "/images/astro-hub.jpg",
    icon: "👨‍🚀",
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Projects</h2>
        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <div className="relative h-48">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} layout="fill" objectFit="cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <span className="text-4xl">{project.icon}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <motion.a
                    href="#"
                    className="text-primary hover:underline"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    href="#"
                    className="text-primary hover:underline"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Source Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
    </section>
  )
}

