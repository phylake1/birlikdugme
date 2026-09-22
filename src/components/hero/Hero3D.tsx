// Hero3D.tsx
"use client"

import { Canvas } from "@react-three/fiber"
import { Environment, Lightformer } from "@react-three/drei"
import { Component, ReactNode, Suspense, useEffect, useRef, useState } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Scene from "./Scene"
import OverlayText from "./OverlayText"

gsap.registerPlugin(ScrollTrigger)

// Bir 3D parçası (model vb.) hata verirse tüm sayfanın çökmesini engeller.
class SafeBoundary extends Component<{ children: ReactNode; fallback?: ReactNode }, { failed: boolean }> {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  componentDidCatch(error: unknown) {
    console.error("[Hero3D] 3D içerik yüklenemedi:", error)
  }

  render() {
    return this.state.failed ? this.props.fallback ?? null : this.props.children
  }
}

// Stüdyo ışığı ortamı — harici HDR dosyası indirmez, tamamen prosedürel.
// (Önceki <Environment preset="studio" /> raw.githack.com'dan HDR çekiyordu;
// bu domain bazı ISP'lerde (ör. Kablonet) engelli olduğu için site çöküyordu.)
function StudioEnvironment() {
  return (
    <Environment resolution={256} frames={1}>
      <Lightformer form="rect" intensity={2} position={[0, 5, -2]} rotation-x={Math.PI / 2} scale={[10, 10, 1]} />
      <Lightformer form="rect" intensity={1.5} position={[-5, 1, 1]} rotation-y={Math.PI / 2} scale={[8, 3, 1]} />
      <Lightformer form="rect" intensity={1.5} position={[5, 1, 1]} rotation-y={-Math.PI / 2} scale={[8, 3, 1]} />
      <Lightformer form="rect" intensity={0.8} position={[0, 0, 6]} scale={[10, 4, 1]} />
      <Lightformer form="ring" intensity={1} position={[0, -4, -4]} scale={4} />
    </Environment>
  )
}

export default function Hero3D() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef(0)
  const [step, setStep] = useState(0)
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
        // Sürekli değişen progress değerini React state yerine ref'te
        // tutuyoruz. Böylece her scroll tick'inde (saniyede onlarca kez)
        // tüm bileşen ağacı yeniden render olmuyor — scroll sırasındaki
        // kasmanın asıl sebeplerinden biri buydu.
        progressRef.current = self.progress

        const currentProgress = self.progress
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
      <section id="#" className="relative h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Yükleniyor...</div>
      </section>
    )
  }

  return (
    <section ref={sectionRef} className="relative h-screen bg-black">
      {/* 3D Canvas Layer */}
      <div className="absolute inset-0 w-full h-full">
        <SafeBoundary>
          <Canvas
            camera={{
              position: isMobile ? [0, 0, 7] : [0, 0, 6],
              fov: isMobile ? 55 : 45,
            }}
            dpr={isMobile ? [1, 1.5] : [1, 2]}
            performance={{ min: 0.5 }}
          >
            <ambientLight intensity={isMobile ? 0.7 : 0.5} />
            <directionalLight position={[5, 5, 5]} intensity={isMobile ? 0.9 : 1} />
            <pointLight position={[-5, -5, -5]} intensity={isMobile ? 0.6 : 0.5} />

            <SafeBoundary>
              <Suspense fallback={null}>
                <Scene step={step} progressRef={progressRef} isMobile={isMobile} />
              </Suspense>
            </SafeBoundary>

            <SafeBoundary>
              <StudioEnvironment />
            </SafeBoundary>
          </Canvas>
        </SafeBoundary>
      </div>

      {/* Text Overlay Layer */}
      <OverlayText step={step} isMobile={isMobile} />
    </section>
  )
}
