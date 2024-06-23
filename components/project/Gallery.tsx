"use client";
import styles from "./style.module.css";
import { useState } from "react";
import Project from "./Project";
import Modal from "./Modal";
import Rounded from "@/common/RoundedButton";
import Link from "next/link";
import { projects } from "@/data/Projects";

export default function Gallery() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <>
      <main className={styles.main}>
        <div className={styles.gallery}>
          <div className="text-left">
            {/* <h1 className="text-4xl items-left">Projects</h1> */}
          </div>
          {projects.slice(0, 4).map((project, index) => {
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
      <div className="w-[250px] m-auto mt-[3rem] max-sm:mt-0">
        <Link href="/work" className="text-black">
          <Rounded>
            <p>View all projects</p>
          </Rounded>
        </Link>
      </div>
    </>
  );
}
