import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function Target(props) {
  const targetRef = useRef();
  const { scene } = useGLTF("/models/modified_game_bar_target_arrow.glb");

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });
  return (
    <mesh {...props} ref={targetRef} scale={1.2}>
      <primitive object={scene} />
    </mesh>
  );
}

export default Target;
