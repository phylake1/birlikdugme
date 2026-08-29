// Hero3D.tsx
"use client"

import { Canvas } from "@react-three/fiber"
import { Environment, useProgress } from "@react-three/drei"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Scene from "./Scene"
import OverlayText from "./OverlayText"

gsap.registerPlugin(ScrollTrigger)

export default function Hero3D() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef(0)
  const [step, setStep] = useState(0)
  const [isMobile, setIsMobile] = useState<boolean | null>(null) // null ile başlat
  const [mounted, setMounted] = useState(false)

  // 3D model (ve stüdyo ortam ışığı HDR'ı) gerçekten belleğe/network'ten
  // yüklenip yüklenmediğini drei'nin global yükleme yöneticisini izleyen
  // useProgress ile takip ediyoruz. Component mount olması ile modelin
  // fiilen görüntülenebilir olması aynı an değil; bu yüzden loader'ı
  // sadece "mounted" olduğunda değil, useProgress "tamamlandı" dediğinde
  // kapatıyoruz. Asset zaten önbellekteyse (useGLTF.preload sayesinde
  // sayfa yüklenirken başlıyor) progress anında 100 olabilir, o zaman da
  // loader gecikmeden kayboluyor.
  const { progress, active } = useProgress()
  const [modelReady, setModelReady] = useState(false)

  useEffect(() => {
    if (!active && progress >= 100) {
      setModelReady(true)
    }
  }, [active, progress])

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
    <section
      ref={sectionRef}
      className="relative h-screen bg-black"
    >
      {/* 3D Canvas Layer */}
      <div className="absolute inset-0 w-full h-full">
        <Canvas
          camera={{
            position: isMobile ? [0, 0, 7] : [0, 0, 6],
            fov: isMobile ? 55 : 45
          }}
          dpr={isMobile ? [1, 1.5] : [1, 2]}
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
          <Scene step={step} progressRef={progressRef} isMobile={isMobile} />
          <Environment preset="studio" />
        </Canvas>
      </div>

      {/* Text Overlay Layer */}
      <OverlayText step={step} isMobile={isMobile} />

      {/* Model Loader Overlay - düğme modeli (ve ortam HDR'ı) fiilen
          yüklenip ilk kareyi çizene kadar canvas'ın üstünde kalıyor,
          hazır olunca sadece fade-out ile kayboluyor. Böylece "sayfa
          yüklendi ama model hâlâ gelmedi" boşluğu ortadan kalkıyor. */}
      <div
        className={`absolute inset-0 z-20 flex items-center justify-center bg-black transition-opacity duration-500 ease-out ${
          modelReady ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-2 border-white/20 border-t-white rounded-full animate-spin" />
          <div className="text-white text-sm sm:text-base font-light tracking-wide">
            Yükleniyor...
          </div>
        </div>
      </div>
    </section>
  )
}
