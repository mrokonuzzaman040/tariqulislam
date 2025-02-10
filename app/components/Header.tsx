"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Home, User, Code, Mail } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const navItems = [
    { name: "Home", icon: Home, href: "#home" },
    { name: "About", icon: User, href: "#about" },
    { name: "Skills", icon: Code, href: "#skills" },
    { name: "Contact", icon: Mail, href: "#contact" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-black bg-opacity-50 backdrop-blur-md ${isMobile ? "hidden" : ""}`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold gradient-text"
          >
            Tariqul Islam
          </motion.h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <motion.li key={item.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <a href={item.href} className="flex items-center hover:text-green-400 transition-colors">
                    <item.icon className="w-5 h-5 mr-2" />
                    <span>{item.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      {isMobile && (
        <nav className="fixed bottom-0 left-0 w-full bg-black bg-opacity-50 backdrop-blur-md z-50">
          <ul className="flex justify-around py-2">
            {navItems.map((item) => (
              <motion.li key={item.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a href={item.href} className="flex flex-col items-center text-sm">
                  <item.icon className="w-6 h-6 mb-1 icon-hover" />
                  <span>{item.name}</span>
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      )}
    </>
  )
}

