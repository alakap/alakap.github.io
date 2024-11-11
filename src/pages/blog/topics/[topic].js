import { promises as fs} from 'fs';
import path from 'path';
import fm from 'front-matter';
import styles from "../../styles/home.module.css";
import { useRouter } from 'next/router';
import Link from 'next/link';

export async function getStaticPaths() {
  const files = await fs.readdir(path.resolve(process.cwd(), 'content/blog'));
  const posts = await Promise.all(files.map(async (filename) => {
    const txt = await fs.readFile(path.resolve(process.cwd(), 'content/blog', filename), 'utf8');
    return fm(txt).attributes;
  }));

  const topicsSet = posts.reduce((acc, meta) => {
    meta.topics.split(',').map(x => x.trim()).forEach(tag => acc.add(tag));
    return acc;
  }, new Set());

  const paths = Array.from(topicsSet).map(topic => ({ params: { topic } }));
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const files = await fs.readdir(path.resolve(process.cwd(), 'content/blog'));
  const posts = await Promise.all(files.map(async (filename) => {
    const txt = await fs.readFile(path.resolve(process.cwd(), 'content/blog', filename), 'utf8');
    return fm(txt).attributes;
  }));

  const topics = posts.reduce((acc, meta) => {
    meta.topics.split(',').map(x => x.trim()).forEach(tag => {
      if (!acc[tag]) acc[tag] = [];
      acc[tag].push(meta);
    });
    return acc;
  }, Object.create(null));

  return { props: {
    posts: topics[params.topic],
    topics: Object.keys(topics),
  } };
}

export default function BlogTopic({ posts, topics }) {
  const router = useRouter()
  const topic = router.query.topic;

  return (
    <div className={styles.page}>
      <aside className={styles.blogsidebar}>
        <strong>blog / {topic}</strong>
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
