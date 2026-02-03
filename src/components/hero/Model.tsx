// Model.tsx
"use client"

import { useGLTF, Center } from "@react-three/drei"
import { useEffect } from "react"

type Props = {
  scale?: number
}

export default function Model({ scale = 1 }: Props) {
  const { scene } = useGLTF("/models/button2.glb") // Model path'ini kontrol et
  
  useEffect(() => {
    if (scene) {
      console.log("Model yüklendi")
    }
  }, [scene])
  
  return (
    <Center>
      <primitive 
        object={scene} 
        scale={scale}
      />
    </Center>
  )
}

useGLTF.preload("/models/button2.glb")