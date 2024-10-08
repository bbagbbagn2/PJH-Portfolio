import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MotionWrapperProps {
  x?: number;
  delay: number;
  children: ReactNode;
}

const getContainerVariants = (x: number, delay: number) => ({
  hidden: { x: x, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

export default function MotionWrapper({
  x = -50,
  delay,
  children,
}: MotionWrapperProps) {
  const containerVariants = getContainerVariants(x, delay);

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      {children}
    </motion.div>
  );
}
