import Image from "next/image";
import styles from "./page.module.css";

import Echo from "../components/Echo";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Echo />
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
