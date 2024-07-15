import React, { ReactNode } from 'react';
import { delay, motion } from 'framer-motion';

interface ContainerProps {
    delay: number;
    children: ReactNode;
}

const containerVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
};

const Container: React.FC<ContainerProps> = ({ delay, children }) => (
    <motion.div variants={{
        hidden: containerVariants.hidden,
        visible: {
            ...containerVariants.visible,
            transition: { ...containerVariants.visible.transition, delay: delay },
        },
    }}
        initial="hidden" animate="visible">
        {children}
    </motion.div>
);

export default Container;
