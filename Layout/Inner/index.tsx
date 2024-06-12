"use client";
import React from "react";
import { motion } from "framer-motion";
// import "./style.scss";
const Inner = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const anim = (variants: any) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };
  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 1,
    },
  };
  const slide = {
    initial: {
      y: "100vh",
    },
    enter: {
      y: "100vh",
    },
    exit: {
      y: "0",
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };
  const perspective = {
    initial: {
      scale: 1,
      y: 0,
    },
    enter: {
      scale: 1,
      y: 0,
    },
    exit: {
      scale: 0.9,
      y: -150,
      opacity: 0.5,
      transition: {
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };
  return (
    <div className="inner ">
      <motion.div
        {...anim(slide)}
        className="fixed top-0 left-0 w-[100vw] h-[100vh]  z-3"
      />
      <motion.div {...anim(perspective)} />
      <motion.div className="page" {...anim(opacity)}>
        {children}
      </motion.div>
    </div>
  );
};

const SVG = () => {
  return (
    <svg>
      <path d=""></path>
    </svg>
  );
};

export default Inner;
