"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxBackground() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 120]);
  const y2 = useTransform(scrollY, [0, 800], [0, -90]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="grid-bg absolute inset-x-0 top-0 h-[70vh]" />
      <motion.div
        style={{ y: y1 }}
        className="absolute -left-40 top-[-10%] h-[460px] w-[460px] rounded-full bg-brand/25 blur-[130px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute -right-32 top-[20%] h-[420px] w-[420px] rounded-full bg-brand-2/20 blur-[130px]"
      />
    </div>
  );
}
