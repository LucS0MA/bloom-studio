import React from "react";
import { motion, useReducedMotion } from "framer-motion";

// const pageVariants = {
//   initial: { opacity: 1 },
//   animate: { opacity: 1 },
//   exit: { opacity: 1 },
// };

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function PageTransition({ children, className = "" }: Props) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    // Return plain container when user prefers reduced motion
    return <div className={className}>{children}</div>;
  }

  return (
      <>
      {/* Overlay */}
      <motion.div
        className="fixed inset-0 z-150 bg-black pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0.25 }}
        transition={{ duration: 0.85, ease: "easeInOut" }}
      />

      {/* Page */}
      <motion.div
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        exit={{ y: -200 }}
        transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
