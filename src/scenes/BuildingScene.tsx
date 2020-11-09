import * as React from 'react';
import { Canvas } from 'react-three-fiber';
// import { RotatingBox } from '../components/3DObjects/RotatingBox';
import TestHouse from '../components/3DObjects/TestHouse';

export const BuildingScene = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {/* <RotatingBox position={[-1.2, 0, 0]} />
      <RotatingBox position={[1.2, 0, 0]} /> */}
      <TestHouse />
    </Canvas>
  );
};

export default BuildingScene;
