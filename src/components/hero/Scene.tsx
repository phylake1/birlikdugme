"use client"

import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"
import Model from "./Model"

type Props = {
  step: number
  progress: number
}

// Rotations to show different angles of the button
// Step 0: Front view (normal)
// Step 1: Side view (Y-axis rotation to show side)
// Step 2: Top view (X-axis rotation to show top)
// Step 3: Diagonal view (both X and Y rotation)
const rotations = [
  { x: 0, y: 0, z: 0 }, // Step 0: Önden görünüm
  { x: 0, y: Math.PI / 2, z: 0 }, // Step 1: Yan taraftan görünüm
  { x: -Math.PI / 2, y: 0, z: 0 }, // Step 2: Üstten görünüm
  { x: -Math.PI / 4, y: Math.PI / 4, z: 0 }, // Step 3: Çapraz açıdan görünüm
]

export default function Scene({ step, progress }: Props) {
  const baseRotationRef = useRef(new THREE.Euler(0, 0, 0))
  const scaleRef = useRef(1.0)
  const rotationGroupRef = useRef<THREE.Group>(null)
  const modelGroupRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    // Get target rotation based on step (position stays fixed at center)
    const targetRot = rotations[step] || rotations[0]
    
    // Smooth interpolation
    const lerpFactor = 0.08
    
    // Base rotation from step-based animation (no continuous spinning)
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

    // Update rotation group with step-based rotation only
    if (rotationGroupRef.current) {
      rotationGroupRef.current.rotation.set(
        baseRotationRef.current.x,
        baseRotationRef.current.y,
        baseRotationRef.current.z
      )
    }

    // Scale animation for emphasis
    const targetScale = 1.0 + Math.sin(progress * Math.PI * 2) * 0.05
    scaleRef.current = THREE.MathUtils.lerp(scaleRef.current, targetScale, 0.1)
    
    // Update model scale directly
    if (modelGroupRef.current) {
      modelGroupRef.current.scale.setScalar(scaleRef.current)
    }
  })

  return (
    <group>
      <group ref={rotationGroupRef}>
        <group ref={modelGroupRef}>
          <Model scale={1.0} />
        </group>
      </group>
    </group>
  )
}
