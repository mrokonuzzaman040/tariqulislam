"use client"

import { useEffect } from "react"
import dynamic from "next/dynamic"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const DynamicBackground = dynamic(() => import("./components/Background"), { ssr: false })

export default function Home() {
  useEffect(() => {
    const smoothScroll = (target: string) => {
      const element = document.querySelector(target)
      if (element) {
        element.scrollInView({
          behavior: "smooth",
          block: "start",
        })
      }
    }

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a")
      if (target && target.hash) {
        e.preventDefault()
        smoothScroll(target.hash)
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      <DynamicBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

