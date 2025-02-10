"use client"

import { motion } from "framer-motion"
import { Canvas, useFrame } from "@react-three/fiber"
import { Box, Torus } from "@react-three/drei"
import { useRef } from "react"

function FuturisticElement() {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      <Box args={[1, 1, 1]} position={[0, 0, 0]}>
        <meshPhongMaterial color="#00f3ff" wireframe />
      </Box>
      <Torus args={[1.5, 0.2, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshPhongMaterial color="#ff00f7" wireframe />
      </Torus>
    </group>
  )
}

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <FuturisticElement />
        </Canvas>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass-effect p-12 rounded-xl z-10 backdrop-blur-lg"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-4 gradient-text"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          Hi, I'm Tariqul Islam
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-4xl mb-8 neon-text"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          Web3 Developer & Next.js Expert
        </motion.h2>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-pink-500 hover:to-purple-500 transition-all duration-300 neon-border inline-block"
        >
          Get in Touch
        </motion.a>
      </motion.div>
    </section>
  )
}

