"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <motion.div
        className="text-center z-10 flex flex-col md:flex-row items-center justify-center gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="relative w-64 h-96 md:w-80 md:h-120"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src="/images/full-body-profile.jpg"
            alt="Full Body Profile"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
          <motion.div
            className="absolute inset-0 border-4 border-primary rounded-2xl"
            animate={{
              boxShadow: ["0 0 0 rgba(255,60,172,0.4)", "0 0 20px rgba(255,60,172,0.6)", "0 0 0 rgba(255,60,172,0.4)"],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to SaraTech Hub</h1>
          <p className="text-xl mb-8">Exploring the Universe of Technology</p>
          <motion.a
            href="#projects"
            className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg transition-all inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
        </div>
      </motion.div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
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
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </div>
    </section>
  )
}

