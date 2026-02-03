// Hero3D.tsx
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
  const [isMobile, setIsMobile] = useState<boolean | null>(null) // null ile başlat
  const [mounted, setMounted] = useState(false)

  // Component mount kontrolü
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkMobile()
    window.addEventListener("resize", checkMobile)
    
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (!mounted || isMobile === null) return
    
    const scrollDistance = isMobile ? "+=200%" : "+=350%"
    
    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: scrollDistance,
      scrub: true,
      pin: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        const currentProgress = self.progress
        setProgress(currentProgress)

        if (currentProgress < 0.25) setStep(0)
        else if (currentProgress < 0.5) setStep(1)
        else if (currentProgress < 0.75) setStep(2)
        else setStep(3)
      },
    })

    return () => {
      scrollTrigger.kill()
    }
  }, [isMobile, mounted])

  // Henüz mount olmadıysa loading göster
  if (!mounted || isMobile === null) {
    return (
      <section className="relative h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Yükleniyor...</div>
      </section>
    )
  }

  return (
    <section 
      ref={sectionRef} 
      className="relative h-screen bg-black"
    >
      {/* 3D Canvas Layer */}
      <div className="absolute inset-0 w-full h-full">
        <Canvas 
          camera={{ 
            position: isMobile ? [0, 0, 7] : [0, 0, 5], 
            fov: isMobile ? 55 : 45 
          }}
          dpr={[1, 2]}
          performance={{ min: 0.5 }}
        >
          <ambientLight intensity={isMobile ? 0.7 : 0.5} />
          <directionalLight 
            position={[5, 5, 5]} 
            intensity={isMobile ? 0.9 : 1} 
          />
          <pointLight 
            position={[-5, -5, -5]} 
            intensity={isMobile ? 0.6 : 0.5} 
          />
          <Scene step={step} progress={progress} isMobile={isMobile} />
          <Environment preset="studio" />
        </Canvas>
      </div>

      {/* Text Overlay Layer */}
      <OverlayText step={step} progress={progress} isMobile={isMobile} />
    </section>
  )
}