// OverlayText.tsx
"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type Props = {
  step: number;
  progress: number;
  isMobile?: boolean;
};

type TextPosition = "top" | "bottom" | "center";

export default function OverlayText({
  step,
  progress,
  isMobile = false,
}: Props) {
  const [opacity, setOpacity] = useState(1);
  const [displayStep, setDisplayStep] = useState(step);
  const { t } = useLanguage();

  const textConfigs = [
    {
      title: t("overlayTitle1"),
      description: t("overlayDesc1"),
      position: "bottom" as TextPosition,
      desktopPosition: "center" as "left" | "right" | "center",
    },
    {
      title: t("overlayTitle2"),
      description: t("overlayDesc2"),
      position: "top" as TextPosition,
      desktopPosition: "right" as "left" | "right" | "center",
    },
    {
      title: t("overlayTitle3"),
      description: t("overlayDesc3"),
      position: "bottom" as TextPosition,
      desktopPosition: "left" as "left" | "right" | "center",
    },
    {
      title: t("overlayTitle4"),
      description: t("overlayDesc4"),
      position: "top" as TextPosition,
      desktopPosition: "right" as "left" | "right" | "center",
    },
  ];

  useEffect(() => {
    setOpacity(0);

    const timeout = setTimeout(() => {
      setDisplayStep(step);
      setOpacity(1);
    }, 350);

    return () => clearTimeout(timeout);
  }, [step]);

  const config = textConfigs[displayStep] || textConfigs[0];

  const mobilePositionClasses: Record<TextPosition, string> = {
    top: "items-start justify-center pt-40 sm:pt-12 lg:pt-16",
    bottom: "items-end justify-center pb-40 sm:pb-12 lg:pb-16",
    center: "items-end justify-center pb-40 sm:pb-12 lg:pb-16",
  };

  const desktopPositionClasses: Record<"left" | "right" | "center", string> = {
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