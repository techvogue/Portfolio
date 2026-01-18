"use client";

import { motion } from "framer-motion";

interface ImageSliderProps {
  images: string[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
  return (
    <div className="relative overflow-hidden rounded-xl">
      <motion.div
        className="flex gap-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        }}
      >
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            className="relative h-40 w-64 flex-shrink-0
              bg-white/10 dark:bg-black/30
              border border-white/15
              rounded-xl overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
