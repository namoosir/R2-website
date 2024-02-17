import { useEffect, useState } from "react";

export default function useMouse() {
    const { innerWidth, innerHeight } = window;

    const [mouse, setMouse] = useState({
        x: (-0.25 + 0.5) * innerWidth,
        y: (0.5) * innerHeight
    });

    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
        const { clientX, clientY } = e;

        setMouse({ x: clientX, y: clientY });
    };

    useEffect(() => {
        setTimeout(() => {
            window.addEventListener('mousemove', handleMouseMove);
        }, 500);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    return mouse;
}