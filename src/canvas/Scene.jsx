import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Lights from "./Lights";
import CameraController from "./CameraController";

const Scene = () => {
    return (
        <Canvas camera={{ position: [0, 0, 6] }}>
            <Lights />
            <Stars />
            <CameraController />
        </Canvas>

    );
};

export default Scene;
