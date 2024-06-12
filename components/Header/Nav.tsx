import React, { useState } from "react";
import styles from "./header.module.css";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "./anim";
import NavLink from "./Link";
import { socials } from "@/data/Socials";
import Link from "next/link";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Nav() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <NavLink
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></NavLink>
            );
          })}
          <div className={styles.footer2}>
            <a>LinkedIn</a>
            {/* <a>Awwwards</a> */}
            <a>Instagram</a>
            {/* <a>Dribble</a> */}
          </div>
        </div>
        <div className={styles.footer}>
          {socials.map((data, index) => (
            <Link href={data.href} target="_blank" key={index}>
              {data.title}
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
