/*
auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei/useGLTF';

import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { useFrame } from 'react-three-fiber';

type GLTFResult = GLTF & {
  nodes: {
    Cube_0: THREE.Mesh;
    Cube_1_1: THREE.Mesh;
    Cube_2_2: THREE.Mesh;
    Cube_3_3: THREE.Mesh;
    Ground: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
    Ground: THREE.MeshStandardMaterial;
  };
};

export default function TestHouse(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF('/test-house.glb') as GLTFResult;

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    if (group.current) {
      // @ts-ignore
      group.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={group} {...props}>
      <group position={[0, 0, -0.1]}>
        <mesh material={materials.Material} geometry={nodes.Cube_0.geometry} />
        <mesh material={materials.Material} geometry={nodes.Cube_1_1.geometry} />
        <mesh material={materials.Material} geometry={nodes.Cube_2_2.geometry} />
        <mesh material={materials.Material} geometry={nodes.Cube_3_3.geometry} />
      </group>
      <mesh
        material={materials.Ground}
        geometry={nodes.Ground.geometry}
        position={[0, -0.96, 0]}
        scale={[3, 0.01, 3]}
      />
    </group>
  );
}

useGLTF.preload('/test-house.glb');
