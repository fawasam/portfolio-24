"use client";
import styles from "./style.module.css";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp } from "@/components/Description/animation";

export default function AnimatedTextWord({ text }: { text: string }) {
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div ref={description} className={styles.description}>
      <div className={styles.body}>
        <p className={`[&>*:nth-child(1)]:text-[200px]`}>
          {text.split(" ").map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
}
