import * as React from 'react';
import { Canvas } from 'react-three-fiber';
import { RotatingBox } from '../components/RotatingBox';

export const BuildingScene = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <RotatingBox position={[-1.2, 0, 0]} />
      <RotatingBox position={[1.2, 0, 0]} />
    </Canvas>
  );
};

export default BuildingScene;
