"use client";
import styles from "./style.module.css";
import Image from "next/image";
import Rounded from "../../common/RoundedButton";
import { useRef } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import Magnetic from "../../common/Magnetic";
import { socials } from "@/data/Socials";
import Link from "next/link";
import AnimatedTextWord from "@/common/TextAnimation";

export default function Contact() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  // const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  return (
    <motion.div ref={container} className={styles.contact}>
      <div className={styles.body}>
        <div className={styles.title}>
          <span>
            <div className={styles.imageContainer}>
              <Image fill={true} alt={"image"} src={`/images/background.jpg`} />
            </div>
            <h2>
              <AnimatedTextWord text="Let's work" />
            </h2>
          </span>

          <h2>
            {" "}
            <AnimatedTextWord text="together" />
          </h2>
          <motion.div className={styles.buttonContainer}>
            <Link href="/contact">
              <Rounded backgroundColor={"#334BD3"} className={styles.button}>
                <p className="text-[20px]">
                  {" "}
                  <AnimatedTextWord text="Get in touch" />
                </p>
              </Rounded>
            </Link>
          </motion.div>
          <motion.svg
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        </div>
        <div className={styles.nav}>
          <Rounded>
            <p className="max-sm:text-[10px] text-[25px]">
              {" "}
              <AnimatedTextWord text="mynamefawas@gmail.com" />
            </p>
          </Rounded>
          <Rounded>
            <p className="max-sm:text-[10px] text-[25px] py-4 max-sm:py-0">
              {" "}
              <AnimatedTextWord text=" +919645885706" />
            </p>
          </Rounded>
        </div>
        <div className={styles.info}>
          <div>
            <span>
              <h3>Version</h3>
              <p>2024 © Edition</p>
            </span>
            <span>
              <h3>Place</h3>
              <p>Calicut, India</p>
            </span>
          </div>
          <div>
            <span className="max-sm:hidden">
              <h3>socials</h3>
              <Magnetic>
                <p>fawasam</p>
              </Magnetic>
            </span>
            {socials.map((data, index) => (
              <Link href={data.href} target="_blank" key={index}>
                <Magnetic key={index}>
                  <p>{data.title}</p>
                </Magnetic>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
