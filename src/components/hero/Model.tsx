"use client"

import { useGLTF } from "@react-three/drei"
import { ThreeElements } from "@react-three/fiber"

type Props = ThreeElements["group"]

export default function Model(props: Props) {
  const { scene } = useGLTF("/models/button.glb")

  return (
    <group {...props}>
      <primitive object={scene} />
    </group>
  )
}

useGLTF.preload("/models/button.glb")
