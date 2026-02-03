// Scene.tsx
"use client"

import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"
import Model from "./Model"

type Props = {
  step: number
  progress: number
  isMobile?: boolean
}

const rotations = [
  { x: 0, y: 0, z: 0 },
  { x: 0, y: Math.PI / 2, z: 0 },
  { x: -Math.PI / 2, y: 0, z: 0 },
  { x: -Math.PI / 4, y: Math.PI / 4, z: 0 },
]

export default function Scene({ step, progress, isMobile = false }: Props) {
  const baseRotationRef = useRef(new THREE.Euler(0, 0, 0))
  const scaleRef = useRef(1.0)
  const rotationGroupRef = useRef<THREE.Group>(null)
  const modelGroupRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    const targetRot = rotations[step] || rotations[0]
    
    const lerpFactor = 0.08
    
    baseRotationRef.current.x = THREE.MathUtils.lerp(
      baseRotationRef.current.x,
      targetRot.x,
      lerpFactor
    )
    baseRotationRef.current.y = THREE.MathUtils.lerp(
      baseRotationRef.current.y,
      targetRot.y,
      lerpFactor
    )
    baseRotationRef.current.z = THREE.MathUtils.lerp(
      baseRotationRef.current.z,
      targetRot.z,
      lerpFactor
    )

    if (rotationGroupRef.current) {
      rotationGroupRef.current.rotation.set(
        baseRotationRef.current.x,
        baseRotationRef.current.y,
        baseRotationRef.current.z
      )
    }

    // Scale değerleri artırıldı
    const baseScale = isMobile ? 1.0 : 1.2  // Mobil: 0.7 → 1.0, Desktop: 1.0 → 1.2
    const scaleEffect = isMobile ? 0.03 : 0.05
    const targetScale = baseScale + Math.sin(progress * Math.PI * 2) * scaleEffect
    scaleRef.current = THREE.MathUtils.lerp(scaleRef.current, targetScale, 0.1)
    
    if (modelGroupRef.current) {
      modelGroupRef.current.scale.setScalar(scaleRef.current)
    }
  })

  return (
    <group>
      <group ref={rotationGroupRef}>
        <group ref={modelGroupRef}>
          <Model scale={isMobile ? 1.0 : 1.2} />  {/* Mobil: 0.7 → 1.0, Desktop: 1.0 → 1.2 */}
        </group>
      </group>
    </group>
  )
}