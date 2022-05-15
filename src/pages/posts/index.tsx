import { GetStaticProps } from "next";
import Head from "next/head";
import { getPrismicClient } from "../../services/prismic";
import Prismic from "@prismicio/client";

import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Post | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Serverless: Quando utilizar e aplicações com NodeJS</strong>
            <p>
              A arquitetura serverless representa um modelo de hospedagem para
              funções que não necessita configuração do servidor, ou seja, todas
              dependências para que sua aplicação rode já estão instaladas de
              forma nativa.
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Serverless: Quando utilizar e aplicações com NodeJS</strong>
            <p>
              A arquitetura serverless representa um modelo de hospedagem para
              funções que não necessita configuração do servidor, ou seja, todas
              dependências para que sua aplicação rode já estão instaladas de
              forma nativa.
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Serverless: Quando utilizar e aplicações com NodeJS</strong>
            <p>
              A arquitetura serverless representa um modelo de hospedagem para
              funções que não necessita configuração do servidor, ou seja, todas
              dependências para que sua aplicação rode já estão instaladas de
              forma nativa.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "publication")],
    {
      fetch: ["publication.title", "publication.content"],
      pageSize: 100,
    }
  );

  console.log(JSON.stringify(response), null, 2);

  return {
    props: {},
  };
};
// export async function getStaticProps({ params, previewData }) {
//   const client = createClient(previewData);

//   const page = await client.getByUID("page", params.uid);

//   return {
//     props: { page },
//   };
// }