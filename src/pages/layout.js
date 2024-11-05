import "./styles/globals.css";
import 'latex.css/style.min.css';
import styles from "./styles/home.module.css";
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <>
    <header className={styles.header}>
      <span className={styles.sitename}>alaka.in</span>
      <Link href="/">About</Link>
      <Link href="/blog">Blog</Link>
    </header>
        {children}
    <footer className={styles.footer}>
      <hr/>
      © 2024, Alakananda Patra
    </footer>
    </>
  );
}
