import Header from "@/components/Layout";
import HomePage from "@/components/HomePage";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <HomePage />
      </main>
    </div>
  );
}
