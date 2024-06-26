"use client";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef } from "react";

import picture1 from "@/public/images/c2montreal.png";
import picture2 from "@/public/images/locomotive.png";
import picture3 from "@/public/images/officestudio.png";
import { useScroll, useTransform, motion } from "framer-motion";
import { SliderProps } from "@/types";

const MovingText = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  return (
    <main className="overflow-hidden ">
      <div className="h-[30vh] max-sm:h-[15vh]" />
      <div ref={containerRef}>
        <Slider
          text={"Full Stack Developer"}
          src={picture1}
          left={"-55%"}
          progress={scrollYProgress}
          direction="left"
        />
        <Slider
          text={"Front End Developer"}
          src={picture2}
          left={"-85%"}
          progress={scrollYProgress}
          direction="right"
        />
        <Slider
          text={"Back End Developer"}
          src={picture3}
          left={"-55%"}
          progress={scrollYProgress}
          direction="left"
        />
      </div>
      <div className="h-[50vh] max-sm:h-[10vh]" />
    </main>
  );
};

export default MovingText;

const Slider = ({ src, left, progress, direction, text }: SliderProps) => {
  const dir = direction === "left" ? -1 : 1;
  const x = useTransform(progress, [0, 1], [-250 * dir, 250 * dir]);
  return (
    <motion.div className="relative flex whitespace-nowrap" style={{ left, x }}>
      <Phrase src={src} text={text} />
      <Phrase src={src} text={text} />
      <Phrase src={src} text={text} />
      <Phrase src={src} text={text} />
    </motion.div>
  );
};
const Phrase = ({ src, text }: { src: StaticImageData; text: string }) => {
  return (
    <div className={"px-5 max-sm:px-0 max-sm:gap-1 flex gap-5 items-center"}>
      <p className="text-[7.5vw] max-sm:text-[50px]">{text}</p>
      <span className="relative h-[7.5vw] aspect-[4/2] max-sm:aspect-[4/1] rounded-full overflow-hidden">
        <Image style={{ objectFit: "cover" }} src={src} alt="image" fill />
      </span>
    </div>
  );
};
