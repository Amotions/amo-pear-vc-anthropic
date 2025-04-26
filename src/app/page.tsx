import Image from "next/image";
import styles from "./page.module.css";

import Echo from "../components/Echo";
import HitAnthroButton from "../components/HitAnthroButton";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HitAnthroButton />
        <Echo />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
