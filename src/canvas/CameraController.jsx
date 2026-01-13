import { useThree, useFrame } from "@react-three/fiber";
import { useLocation } from "react-router-dom";
import { Vector3 } from "three";
import { useRef } from "react";

const CameraController = () => {
    const { camera } = useThree();
    const location = useLocation();
    const target = useRef(new Vector3(0, 0, 6));

    // Page-based camera positions
    if (location.pathname === "/") target.current.set(0, 0, 6);
    if (location.pathname === "/registration") target.current.set(2, 1, 6);
    if (location.pathname === "/teams") target.current.set(-2, 1, 6);
    if (location.pathname === "/timeline") target.current.set(0, 2, 7);
    if (location.pathname === "/team") target.current.set(0, 0, 4);

    useFrame(() => {
        camera.position.lerp(target.current, 0.05);
        camera.lookAt(0, 0, 0);
    });

    return null;
};

export default CameraController;
