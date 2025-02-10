"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import type React from "react" // Added import for React

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formState)
    setFormState({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-12 text-center gradient-text"
        >
          Get in Touch
        </motion.h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-effect p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-6 neon-text">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Mail className="w-6 h-6 mr-4 icon-hover" />
                  <a href="mailto:rgfgg2086@gmail.com" className="hover:text-green-400 transition-colors">
                    rgfgg2086@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="w-6 h-6 mr-4 icon-hover" />
                  <a href="tel:+15713778036" className="hover:text-green-400 transition-colors">
                    +1 5713778036
                  </a>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 mt-1 icon-hover" />
                  <span>M/S A.S.R Agro, Mosenabad, Daulatpur, Kushtia, PO : 7051</span>
                </li>
              </ul>
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-2 neon-text">Additional Beneficiary</h4>
                <p>Ilias toum-Benchekroun</p>
              </div>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="glass-effect p-8 rounded-xl"
            >
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 neon-text">
                  Name
                </label>
                <motion.input
                  whileFocus={{ boxShadow: "0 0 8px var(--neon-blue)" }}
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                  className="w-full px-3 py-2 bg-transparent border border-gray-600 rounded focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 neon-text">
                  Email
                </label>
                <motion.input
                  whileFocus={{ boxShadow: "0 0 8px var(--neon-blue)" }}
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                  className="w-full px-3 py-2 bg-transparent border border-gray-600 rounded focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 neon-text">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ boxShadow: "0 0 8px var(--neon-blue)" }}
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  className="w-full px-3 py-2 bg-transparent border border-gray-600 rounded focus:outline-none focus:border-blue-500 transition-colors"
                  rows={4}
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-full font-semibold hover:from-purple-500 hover:to-blue-500 transition-all duration-300 neon-border"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  )
}

