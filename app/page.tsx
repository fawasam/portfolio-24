import Gallery from "@/component/project/Gallery";
import styles from "./page.module.css";
import Landing from "@/component/Landing/Landing";

export default function Home() {
  return (
    <main>
      <>
        <Landing />
        <Gallery />
      </>
    </main>
  );
}
