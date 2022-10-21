import './index';
import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, useTexture } from '@react-three/drei';

function Model(props) {
  const group = useRef();
  const bakedTexture = useTexture('/baked2.jpg');
  const { nodes, materials } = useGLTF('/uazz.glb');

  // useFrame(({ clock }) => {
  //   group.current.rotation.y = clock.getElapsedTime() * 0.2;
  // });

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.baked.geometry}
        material={nodes.baked.material}
        position={[1.33, -0.04, -1.19]}
        rotation={[0.03, 0.33, -0.01]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh position={[0.3, -0.25, 0]}>
        <boxBufferGeometry args={[10, 0.5, 10]} />
        <meshBasicMaterial color={'#9a6a5c'} />
      </mesh>
    </group>
  );
}

function App() {
  return (
    <div className="App">
      <Canvas camera={{ fov: 45, position: [10, 4, 6] }}>
        <Suspense fallback={null}>
          <Model />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
