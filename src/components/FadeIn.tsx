"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, PropsWithChildren } from "react";

export default function FadeIn(props: PropsWithChildren<{ delay?: number }>) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-10% 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut", delay: props.delay ?? 0 }}
    >
      {props.children}
    </motion.div>
  );
}
