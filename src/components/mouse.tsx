import { useState, useContext } from 'react';
import useMouse from '../utils/useMouse';
import { motion } from 'framer-motion';

import { MouseContext } from '@/contexts/MouseContext';

export default function Mouse() {
    const { mouseVariant } = useContext(MouseContext);
    const mouse = useMouse();

    const initialX = (-0.25 + 0.5) * innerWidth;
    const initialY = (0.5) * innerHeight;

    const size = 32;
    const [hidden, setHidden] = useState(true);

    if (hidden && (mouse.x != initialX || mouse.y != initialY)) {
        setHidden(false);
    }

    const variants = {
        default: {
            x: mouse.x - size / 2,
            y: mouse.y - size / 2
        },
        externalLink: {
            scale: 2,
        }
    }

    return (
        <>
            {!hidden &&
                <motion.div
                    className="fixed bg-primary/75 h-8 w-8 rounded-full z-[100] hidden lg:block border pointer-events-none"
                    variants={variants}
                    animate={mouseVariant}
                    transition={{
                        type: "tween",
                        ease: "backOut"
                    }}
                />
            }
        </>
    );
}