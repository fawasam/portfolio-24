"use client";
import Descriptinon from "@/components/Description/Description";
import Landing from "@/components/Landing/Landing";
import MovingText from "@/components/moving-text";
import Preloader from "@/components/Preloader";
import Gallery from "@/components/project/Gallery";
import SliderImages from "@/components/SliderImages";
import Inner from "@/Layout/Inner";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(true);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoaded(false);
        document.body.style.cursor = "default";
      }, 2000);
    })();
  }, []);
  return (
    <Inner>
      {/* <AnimatePresence mode="wait">{isLoaded && <Preloader />}</AnimatePresence> */}
      <Landing />
      <Descriptinon />
      <MovingText />
      <Gallery />
      <SliderImages />
    </Inner>
  );
}
