import { promises as fs} from 'fs';
import path from 'path';
import fm from 'front-matter';
import styles from "../styles/home.module.css";
import Link from 'next/link';

export async function getStaticProps() {
  const files = await fs.readdir(path.resolve(process.cwd(), 'content/blog'));
  const posts = await Promise.all(files.map(async (filename) => {
    const txt = await fs.readFile(path.resolve(process.cwd(), 'content/blog', filename), 'utf8');
    return fm(txt).attributes;
  }));

  const topicsSet = posts.reduce((acc, meta) => {
    meta.topics.split(',').map(x => x.trim()).forEach(tag => acc.add(tag));
    return acc;
  }, new Set());

  const topics = Array.from(topicsSet);

  return { props: {
    posts,
    topics,
  } };
}

export default function Blog({ posts, topics }) {
  return (
    <div className={styles.page}>
      <aside className={styles.blogsidebar}>
        <strong>blog</strong>
        <ul>
          {topics.map(x => <li><Link href={`/blog/topics/${x}`}>{x}</Link></li>)}
        </ul> 
      </aside>
      <main className={styles.main}>
        {posts.map(post => <>
          <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
          <p>
            {post.abstract}
            <br/>
            <em>{post.topics}</em><br/>
            {post.created}
          </p>
        </>)}
      </main>
    </div>
  );
}
