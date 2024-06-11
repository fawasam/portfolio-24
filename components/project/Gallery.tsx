"use client";
import styles from "./style.module.css";
import { useState } from "react";
import Project from "./Project";
import Modal from "./Modal";

const projects = [
  {
    title: "My Degree",
    src: "c2montreal.png",
    color: "#000000",
  },
  {
    title: "Office Studio",
    src: "officestudio.png",
    color: "#8C8C8C",
  },
  {
    title: "Locomotive",
    src: "locomotive.png",
    color: "#EFE8D3",
  },
  {
    title: "Silencio",
    src: "silencio.png",
    color: "#706D63",
  },
];

export default function Gallery() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className={styles.main}>
      <div className={styles.gallery}>
        <div className="text-left">
          <h1 className="text-4xl items-left">Projects</h1>
        </div>
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              setModal={setModal}
              key={index}
            />
          );
        })}
      </div>
      <Modal modal={modal} projects={projects} />
    </main>
  );
}
