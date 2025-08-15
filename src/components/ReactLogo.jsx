import { Float, useGLTF } from "@react-three/drei";

export default function ReactLogo(props) {
  const { nodes, materials } = useGLTF("/models/react_logo_circle.glb");
  return (
    <Float floatIntensity={1}>
      <group
        position={[9, 9, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        {...props}
        dispose={null}
      >
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.4}>
          <mesh
            geometry={nodes["React-Logo_Material002_0"].geometry}
            material={materials["Material.002"]}
            position={[0, 0.079, 0.181]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[0.392, 0.392, 0.527]}
          />

          <mesh
            geometry={nodes.Backdrop_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-0.02, 0.079, 0]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[2.4, 2.4, 0.5]}
          />
        </group>
      </group>
    </Float>
  );
}

useGLTF.preload("/models/react_logo_circle.glb");
