import { promises as fs} from 'fs';
import path from 'path';
import Markdown from 'markdown-to-jsx';
import Image from "next/image";
import styles from "./styles/home.module.css";

export async function getStaticProps() {
  const sidebar = await fs.readFile(path.resolve(process.cwd(), 'content/home/sidebar.md'), 'utf8');
  const main = await fs.readFile(path.resolve(process.cwd(), 'content/home/main.md'), 'utf8');

  return { props: {
    sidebar,
    main,
  } };
}

export default function Home({ main, sidebar }) {
  return (
    <div className={styles.page}>
      <aside className={styles.sidebar}>
        <Image
          className={styles.photo}
          src="/alaka.jpeg"
          alt="Photograph of Alakananda Patra"
          width={200}
          height={200}
          priority
        />
        <Markdown>{sidebar}</Markdown>
      </aside>
      <main className={styles.main}>
        <Markdown>{main}</Markdown>
      </main>
    </div>
  );
}
