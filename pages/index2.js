import Head from "next/head";
import Link from "next/link";

import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getPostsData } from "../lib/postsApi";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/api_posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

// getStaticProps runs only on the server-side.
// It will never run on the client-side.
// It won’t even be included in the JS bundle for the browser

// In production, getStaticProps runs at build time.

export async function getStaticProps() {
  const allPostsData = await getPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

// pour du SSR
// props for your component
/*
export async function getServerSideProps(context) {
  return {
    props: {
      
    },
  };
} */
