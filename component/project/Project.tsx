"use client";
import React from "react";
import styles from "./style.module.css";

type ProjectProps = {
  index: number;
  title: string;
  setModal: (modal: { active: boolean; index: number }) => void;
};
export default function Project({ index, title, setModal }: ProjectProps) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={styles.project}
    >
      <h2>{title}</h2>
      <p>Design & Development</p>
    </div>
  );
}
