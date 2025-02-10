"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black bg-opacity-50 backdrop-blur-md py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <h2 className="text-2xl font-bold gradient-text">Tariqul Islam</h2>
            <p className="text-sm text-gray-400">Web3 Developer & Next.js Expert</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-4"
          >
            <a href="#" className="text-white hover:text-green-400 transition-colors">
              <Github className="w-6 h-6 icon-hover" />
            </a>
            <a href="#" className="text-white hover:text-green-400 transition-colors">
              <Linkedin className="w-6 h-6 icon-hover" />
            </a>
            <a href="#" className="text-white hover:text-green-400 transition-colors">
              <Twitter className="w-6 h-6 icon-hover" />
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center text-sm text-gray-400"
        >
          © {currentYear} Tariqul Islam. All rights reserved.
        </motion.div>
      </div>
    </footer>
  )
}

