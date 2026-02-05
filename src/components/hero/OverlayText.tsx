// OverlayText.tsx
"use client";

import { useEffect, useState } from "react";

type Props = {
  step: number;
  progress: number;
  isMobile?: boolean;
};

type TextPosition = "top" | "bottom" | "center";

const textConfigs: Array<{
  title: string;
  description: string;
  position: TextPosition;
  desktopPosition?: "left" | "right" | "center";
}> = [
  {
    title: "Kalite Detaylarda Gizlidir",
    description:
      "Yüksek kaliteli malzemelerden üretilen dayanıklı ve şık düğmeler. Birlik Düğme, her üründe estetik ve uzun ömürlü kullanım sunar.",
    position: "bottom",
    desktopPosition: "center",
  },
  {
    title: "Geniş Ürün Yelpazesi",
    description:
      "Farklı model ve tasarımlarla her ihtiyaca uygun çözümler. Zengin çeşitlilik ve sürekli stok avantajı her zaman yanınızda.",
    position: "top",
    desktopPosition: "right",
  },
  {
    title: "İthal Kalite, Uygun Fiyat",
    description:
      "Dünyanın seçkin üreticilerinden ithal edilen düğmeler, Birlik Düğme güvencesiyle ulaşılabilir fiyatlarla sunulur.",
    position: "bottom",
    desktopPosition: "left",
  },
  {
    title: "Sektörün Güvenilir Tercihi",
    description:
      "Tekstil profesyonellerinin yıllardır tercih ettiği marka. Güvenilir tedarik, istikrarlı kalite ve hızlı temin.",
    position: "top",
    desktopPosition: "right",
  },
];

export default function OverlayText({
  step,
  progress,
  isMobile = false,
}: Props) {
  const [opacity, setOpacity] = useState(1);
  const [displayStep, setDisplayStep] = useState(step);

  useEffect(() => {
    setOpacity(0);

    const timeout = setTimeout(() => {
      setDisplayStep(step);
      setOpacity(1);
    }, 350);

    return () => clearTimeout(timeout);
  }, [step]);

  const config = textConfigs[displayStep] || textConfigs[0];

  const mobilePositionClasses = {
    top: "items-start justify-center pt-40 sm:pt-12 lg:pt-16",
    bottom: "items-end justify-center pb-40 sm:pb-12 lg:pb-16",
    center: "items-end justify-center pb-40 sm:pb-12 lg:pb-16",
  };

  const desktopPositionClasses = {
    left: "items-center justify-start pl-8 md:pl-12 lg:pl-20",
    right: "items-center justify-end pr-8 md:pr-12 lg:pr-20",
    center: "items-end justify-center pb-12 lg:pb-16",
  };

  const getPositionClass = () => {
    if (isMobile) {
      return mobilePositionClasses[config.position];
    }
    return desktopPositionClasses[config.desktopPosition || "left"];
  };

  const getTextAlignment = () => {
    if (isMobile) {
      return "text-center";
    }
    if (config.desktopPosition === "center") {
      return "text-center";
    }
    return config.desktopPosition === "right" ? "text-right" : "text-left";
  };

  return (
    <div className="pointer-events-none absolute inset-0 flex z-10">
      <div
        className={`flex ${getPositionClass()} w-full transition-opacity duration-700 ease-in-out`}
        style={{ opacity }}
      >
        <div
          className={`text-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg px-4 sm:px-6 transition-transform duration-700 ease-in-out ${getTextAlignment()}`}
          style={{ transform: `translateY(${(1 - opacity) * 20}px)` }}
        >
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-2 sm:mb-3">
            {config.title}
          </div>
          <div className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 leading-relaxed">
            {config.description}
          </div>
        </div>
      </div>
    </div>
  );
}