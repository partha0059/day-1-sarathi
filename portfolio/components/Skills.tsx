"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const skills = [
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "🚀" },
  { name: "Java", icon: "☕" },
  { name: "Python", icon: "🐍" },
  { name: "C", icon: "⚙️" },
  { name: "PostgreSQL", icon: "🐘" },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
        <motion.div
          ref={ref}
          className="flex flex-wrap justify-center gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm px-6 py-3 rounded-full font-semibold hover:from-primary/30 hover:to-secondary/30 transition-all cursor-default"
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">{skill.icon}</span>
              {skill.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
    </section>
  )
}

