import { useEffect, useState } from "react";

export default function useMouse() {
    const [mouse, setMouse] = useState({
        x: 0,
        y: 0
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