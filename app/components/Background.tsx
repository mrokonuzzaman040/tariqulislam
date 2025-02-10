"use client"

import { useRef } from "react"
import * as THREE from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import { Stars, Sphere } from "@react-three/drei"

function FuturisticSphere() {
  const sphereRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.5
      sphereRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  return (
    <Sphere ref={sphereRef} args={[1, 64, 64]} position={[0, 0, -5]}>
      <meshPhongMaterial color="#00f3ff" wireframe />
    </Sphere>
  )
}

export default function Background() {
  return (
    <div className="fixed top-0 left-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FuturisticSphere />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  )
}

