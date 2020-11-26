import { getAllPostIds, getPostData } from "../../lib/postsApi";
import Layout from "../../components/layout";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";

// la liste possible des id = les chemins possibles
export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// getStaticProps runs only on the server-side
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  console.log("postData :: ", postData);

  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>{postData.body}</div>
      </article>
    </Layout>
  );
}

/*

{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur"
}

*/
