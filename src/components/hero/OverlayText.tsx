"use client"

import { useEffect, useState } from "react"

type Props = {
  step: number
  progress: number
}

type TextPosition = "left" | "right"

// Text configurations with positions around the model
const textConfigs: Array<{
  title: string
  description: string
  position: TextPosition
}> = [
  {
    title: "Premium Ceket Düğmeleri",
    description: "Yüksek kaliteli malzemelerden üretilmiş, dayanıklı ve şık ceket düğmeleri. Her detayda mükemmellik arayanlar için.",
    position: "left",
  },
  {
    title: "Özenle İşlenmiş Detaylar",
    description: "Her düğme, geleneksel zanaatkarlık ile modern üretim tekniklerinin birleşimiyle yaratıldı. Yan profilde görünen detaylar, kalitemizin kanıtı.",
    position: "right",
  },
  {
    title: "Üstten Mükemmel Görünüm",
    description: "Düğmenin üst yüzeyi, pürüzsüz ve parlak bir finişe sahiptir. Her açıdan mükemmel görünüm için tasarlandı.",
    position: "left",
  },
  {
    title: "Çok Yönlü Tasarım",
    description: "Çapraz açıdan bakıldığında bile zarif ve dengeli bir görünüm sunan düğmelerimiz, ceketinizin tamamlayıcı parçası olarak öne çıkar.",
    position: "right",
  },
]

export default function OverlayText({ step, progress }: Props) {
  const [opacity, setOpacity] = useState(1)
  const [displayStep, setDisplayStep] = useState(step)

  useEffect(() => {
    // Fade out
    setOpacity(0)
    
    // After fade out, change content and fade in
    const timeout = setTimeout(() => {
      setDisplayStep(step)
      setOpacity(1)
    }, 350) // Half of transition duration (700ms / 2)

    return () => clearTimeout(timeout)
  }, [step])

  const config = textConfigs[displayStep] || textConfigs[0]

  // Position classes based on text position
  const positionClasses = {
    left: "items-center justify-start pl-12 md:pl-20",
    right: "items-center justify-end pr-12 md:pr-20",
  }

  return (
    <div className="pointer-events-none absolute inset-0 flex">
      {/* Main text overlay */}
      <div
        className={`flex ${positionClasses[config.position]} w-full transition-opacity duration-700 ease-in-out`}
        style={{ opacity }}
      >
        <div className={`text-white max-w-xs md:max-w-sm transition-transform duration-700 ease-in-out ${config.position === "right" ? "text-right" : "text-left"}`}
          style={{ transform: `translateY(${(1 - opacity) * 20}px)` }}>
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
            {config.title}
          </h2>
          <p className="text-xs md:text-sm lg:text-base text-white leading-snug">
            {config.description}
          </p>
        </div>
      </div>

    </div>
  )
}
