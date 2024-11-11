import { promises as fs} from 'fs';
import path from 'path';
import fm from 'front-matter';
import styles from "../styles/home.module.css";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Markdown from 'markdown-to-jsx';

export async function getStaticPaths() {
  const files = await fs.readdir(path.resolve(process.cwd(), 'content/blog'));
  const slugs = await Promise.all(files.map(async (filename) => {
    const txt = await fs.readFile(path.resolve(process.cwd(), 'content/blog', filename), 'utf8');
    return fm(txt).attributes.slug;
  }));

  const paths = slugs.map(slug => ({ params: { slug } }));
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  let post;

  const files = await fs.readdir(path.resolve(process.cwd(), 'content/blog'));
  const posts = await Promise.all(files.map(async (filename) => {
    const txt = await fs.readFile(path.resolve(process.cwd(), 'content/blog', filename), 'utf8');
    const fmatter = fm(txt);
    const attrs = fmatter.attributes;
    if (attrs.slug === slug) {
      post = [attrs, fmatter.body];
    }
    return attrs;
  }));

  const topicsSet = posts.reduce((acc, meta) => {
    meta.topics.split(',').map(x => x.trim()).forEach(tag => acc.add(tag));
    return acc;
  }, new Set());

  const topics = Array.from(topicsSet);

  const slugs =  posts.reduce((acc, meta) => {
    acc.add(meta.slug);
    return acc;
  }, new Set());

  if (slugs.size !== files.length) {
    throw new Error("Slugs must be unique");
  }

  return { props: {
    post,
    topics,
  } };
}

export default function BlogPost({ post, topics }) {
  const router = useRouter()
  const slug = router.query.slug;
  const [attr, body] = post;

  return (
    <div className={styles.page}>
      <aside className={styles.blogsidebar}>
        <strong>blog</strong>
        <ul>
          {topics.map(x => <li><Link href={`/blog/topics/${x}`}>{x}</Link></li>)}
        </ul> 
      </aside>
      <main className={styles.main}>
        <h1>{attr.title}</h1>
        <Markdown>{body}</Markdown>
      </main>
    </div>
  );
}
