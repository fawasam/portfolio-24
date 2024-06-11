"use client";
import Contact from "@/components/contact";
import Descriptinon from "@/components/Description/Description";
import Landing from "@/components/Landing/Landing";
import MovingText from "@/components/moving-text";
import Gallery from "@/components/project/Gallery";
import SliderImages from "@/components/SliderImages";

import Inner from "@/Layout/Inner";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const scroll = new LocomotiveScroll();
    };
  }, []);
  return (
    <Inner>
      <Landing />
      <Descriptinon />
      <MovingText />
      <Gallery />
      <SliderImages />
      <Contact />
    </Inner>
  );
}
