"use client";
import { AnimatePresence } from "framer-motion";
import styles from "./header.module.css";
import { useState } from "react";
import Nav from "./Nav";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className={styles.button}
      >
        <div
          className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
        ></div>
        <AnimatePresence mode="wait"> {isActive && <Nav />}</AnimatePresence>
      </div>
    </div>
  );
}
