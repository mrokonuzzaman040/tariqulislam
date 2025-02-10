"use client"

import { motion } from "framer-motion"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import type * as THREE from "three"
import { useRef, useState, useMemo } from "react"

function Galaxy() {
  const ref = useRef<THREE.Points>(null!)
  const [sphere] = useState(() => new Float32Array(5000 * 3))

  useMemo(() => {
    for (let i = 0; i < 5000; i++) {
      const i3 = i * 3
      const radius = Math.random() * 1.5
      const spinAngle = radius * 5
      const branchAngle = ((i % 3) * 2 * Math.PI) / 3

      sphere[i3] = Math.sin(branchAngle + spinAngle) * radius
      sphere[i3 + 1] = (Math.random() - 0.5) * 0.3
      sphere[i3 + 2] = Math.cos(branchAngle + spinAngle) * radius
    }
  }, [sphere])

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.05
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#ffa0e0" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-black bg-opacity-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 h-[400px]">
          <Canvas camera={{ position: [0, 0, 1.5] }}>
            <Galaxy />
          </Canvas>
        </div>
        <div className="md:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-8 text-center gradient-text"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="mb-4">
              I&apos;m a passionate web developer with expertise in Next.js, Node.js, and React. I love creating efficient,
              scalable, and user-friendly web applications.
            </p>
            <p>
              With a keen eye for design and a strong foundation in modern web technologies, I strive to deliver
              high-quality solutions that meet and exceed client expectations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

