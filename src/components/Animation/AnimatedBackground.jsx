import React from "react";
import { motion } from "framer-motion";

const triangles = [
  { id: 1, points: "50,15 90,85 10,85", color: "#ff00ff" },
  { id: 2, points: "150,35 190,105 110,105", color: "#ff66ff" },
  { id: 3, points: "250,55 290,125 210,125", color: "#cc00cc" },
];

const AnimatedBackground = () => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 300 150" style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}>
      {triangles.map((tri, index) => (
        <motion.polygon
          key={tri.id}
          points={tri.points}
          fill={tri.color}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 0.3,
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 360],
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
            delay: index * 2
          }}
        />
      ))}
    </svg>
  );
};

export default AnimatedBackground;
