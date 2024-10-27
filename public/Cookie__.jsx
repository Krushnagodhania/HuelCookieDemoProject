/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 Cookie__.gltf 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/Cookie__.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Circle008.geometry} material={materials['Material.001']} 
      position={[0.0, 0.442, -0.003]} rotation={[3.083, -1.554, 3.066]} scale={21.668} />
    </group>
  )
}

useGLTF.preload('/Cookie__.gltf')