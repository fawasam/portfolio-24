"use client";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef } from "react";
import Lenis from "Lenis";
import picture1 from "@/public/images/c2montreal.png";
import picture2 from "@/public/images/locomotive.png";
import picture3 from "@/public/images/officestudio.png";
import { useScroll, useTransform, motion } from "framer-motion";
import { SliderProps } from "@/types";

const MovingText = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  return (
    <main className="overflow-hidden">
      <div className="h-[60vh]" />
      <div ref={containerRef}>
        <Slider
          src={picture1}
          left={"-55%"}
          progress={scrollYProgress}
          direction="left"
        />
        <Slider
          src={picture2}
          left={"-85%"}
          progress={scrollYProgress}
          direction="right"
        />
        <Slider
          src={picture3}
          left={"-55%"}
          progress={scrollYProgress}
          direction="left"
        />
      </div>
      <div className="h-[50vh]" />
    </main>
  );
};

export default MovingText;

const Slider = ({ src, left, progress, direction }: SliderProps) => {
  const dir = direction === "left" ? -1 : 1;
  const x = useTransform(progress, [0, 1], [-250 * dir, 250 * dir]);
  return (
    <motion.div className="relative flex whitespace-nowrap" style={{ left, x }}>
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
    </motion.div>
  );
};
const Phrase = ({ src }: { src: StaticImageData }) => {
  return (
    <div className={"px-5 max-sm:px-0 max-sm:gap-1 flex gap-5 items-center"}>
      <p className="text-[7.5vw] max-sm:text-[40px]">Front End Developer</p>
      <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <Image style={{ objectFit: "cover" }} src={src} alt="image" fill />
      </span>
    </div>
  );
};
