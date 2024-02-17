import useMouse from '../utils/useMouse';
import { motion } from 'framer-motion';

export default function Mouse() {
    const mouse = useMouse();
    const size = 32;

    return (
        <motion.div
            className="fixed bg-primary/75 h-8 w-8 rounded-full z-[100] hidden lg:block border"
            animate={{
                x: mouse.x - size / 2,
                y: mouse.y - size / 2
            }}
            transition={{
                type: "tween",
                ease: "backOut"
            }}
        />
    );
}