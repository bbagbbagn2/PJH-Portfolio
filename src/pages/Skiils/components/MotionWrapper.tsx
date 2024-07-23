import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';


interface MotionWrapperProps {
    x?: number;
    y?: number;
    children: ReactNode;
};

export default function MotionWrapper({ x, y, children }: MotionWrapperProps) {
    const whileInViewProps = x !== undefined
        ? { opacity: 1, x: 0 }
        : { opacity: 1, y: 0 };

    const initialProps = x !== undefined
        ? { opacity: 0, x: x }
        : { opacity: 0, y: y };

    return (
        <motion.div
            whileInView={whileInViewProps}
            initial={initialProps}
            transition={{ duration: 1.5 }}
        >
            {children}
        </motion.div>

    );
}
