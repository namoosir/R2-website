import { useState } from 'react';
import useMouse from '../utils/useMouse';
import { motion } from 'framer-motion';

export default function Mouse() {
    const mouse = useMouse();
    const initialX = (-0.25 + 0.5) * innerWidth;
    const initialY = (0.5) * innerHeight;

    const size = 32;
    const [hidden, setHidden] = useState(true);

    if (hidden && (mouse.x != initialX || mouse.y != initialY)) {
        setHidden(false);
    }

    const variants = {
        default: "fixed bg-primary/75 h-8 w-8 rounded-full z-[100] hidden lg:block border pointer-events-none",
        externalSite: "fixed bg-primary/75 h-8 w-8 rounded-full z-[100] hidden lg:block border pointer-events-none",
    }

    return (
        <>
            {!hidden &&
                <motion.div
                    className="fixed bg-primary/75 h-8 w-8 rounded-full z-[100] hidden lg:block border pointer-events-none"
                    animate={{
                        x: mouse.x - size / 2,
                        y: mouse.y - size / 2
                    }}
                    transition={{
                        type: "tween",
                        ease: "backOut"
                    }}
                />
            }
        </>
    );
}