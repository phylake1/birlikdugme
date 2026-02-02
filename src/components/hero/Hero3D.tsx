"use client"

import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Scene from "./Scene"
import OverlayText from "./OverlayText"

gsap.registerPlugin(ScrollTrigger)

export default function Hero3D() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [step, setStep] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=300%",
      scrub: true,
      onUpdate: (self) => {
        const currentProgress = self.progress
        setProgress(currentProgress)

        // Divide scroll into 4 steps
        if (currentProgress < 0.25) setStep(0)
        else if (currentProgress < 0.5) setStep(1)
        else if (currentProgress < 0.75) setStep(2)
        else setStep(3)
      },
    })

    return () => {
      scrollTrigger.kill()
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <pointLight position={[-5, -5, -5]} intensity={0.5} />
          <Scene step={step} progress={progress} />
          <Environment preset="studio" />
        </Canvas>

        <OverlayText step={step} progress={progress} />
      </div>
    </section>
  )
}
