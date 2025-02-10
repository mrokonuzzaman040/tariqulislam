"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Code, Server, Database, Globe, Cpu, Zap, LucideIcon } from "lucide-react"

const skills = [
  { name: "Next.js", level: 90, icon: Globe, color: "from-blue-400 to-blue-600" },
  { name: "React", level: 85, icon: Code, color: "from-cyan-400 to-cyan-600" },
  { name: "Node.js", level: 80, icon: Server, color: "from-green-400 to-green-600" },
  { name: "JavaScript", level: 90, icon: Zap, color: "from-yellow-400 to-yellow-600" },
  { name: "TypeScript", level: 75, icon: Cpu, color: "from-blue-500 to-blue-700" },
  { name: "Web3", level: 85, icon: Database, color: "from-purple-400 to-purple-600" },
]

interface Skill {
  name: string;
  level: number;
  icon: LucideIcon;
  color: string;
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
        hidden: { opacity: 0, y: 50 },
      }}
      className="skill-card relative overflow-hidden rounded-lg p-6"
    >
      <div className="skill-card-content">
        <div className="flex items-center mb-4">
          <skill.icon className="w-8 h-8 mr-3 skill-icon" />
          <h3 className="text-xl font-semibold neon-text">{skill.name}</h3>
        </div>
        <div className="bg-gray-700 h-4 rounded-full overflow-hidden">
          <motion.div
            className="h-full w-full origin-left"
            style={{
              background: `linear-gradient(90deg, var(--neon-blue) 0%, var(--neon-purple) 50%, var(--neon-pink) 100%)`,
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: skill.level / 100 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
          />
        </div>
        <motion.p
          className="text-right mt-2 font-semibold skill-level"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          {skill.level}%
        </motion.p>
      </div>
      <div className="skill-card-bg"></div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      <div className="container mx-auto px-4 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-12 text-center gradient-text"
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

