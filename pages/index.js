import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured'
import ProductList from '../components/ProductList'
import styles from '../styles/Home.module.css'

export default function Home({productList}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Food ordering app</title>
        <meta name="description" content="Best neapolitan pizza in Cracow!" />
        <link rel="icon" href="/favicon.ico" passHref/>
      </Head>
      <Featured />
      <ProductList productList={productList}/>
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("/api/products");
  return {
    props: {
      productList: res.data,
      admin,
    },
  };
};
