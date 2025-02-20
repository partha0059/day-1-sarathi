"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FaTwitter, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa"

const socialLinks = [
  { name: "Twitter", icon: FaTwitter, url: "#" },
  { name: "Instagram", icon: FaInstagram, url: "#" },
  { name: "YouTube", icon: FaYoutube, url: "#" },
  { name: "GitHub", icon: FaGithub, url: "#" },
]

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-xl mb-10">Connect with me on social media and stay updated with the latest cosmic content</p>
        <motion.div
          ref={ref}
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              className="bg-gradient-to-br from-primary/20 to-secondary/20 hover:from-primary/30 hover:to-secondary/30 backdrop-blur-sm p-4 rounded-full transition-all"
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <link.icon className="text-2xl" />
              <span className="sr-only">{link.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </motion.div>
    </section>
  )
}

