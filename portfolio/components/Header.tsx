"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/50 backdrop-blur-md" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-primary transition-colors">
          SaraTech Hub
        </Link>
        <ul className="hidden md:flex space-x-6">
          {["Home", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <Link href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors">
                {item}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/login"
              className="bg-gradient-to-r from-primary to-secondary px-4 py-2 rounded-full hover:shadow-lg transition-all"
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  )
}

