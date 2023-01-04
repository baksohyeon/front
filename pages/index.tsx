import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function IndexPage() {
  const callApi = async () => {
    try {
      // http://localhost:3001/api/auth/google/login
      const res = await fetch(`https://www.naver.com/`);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    // <Layout>
    //   <h1>Google Oauth front</h1>
    //   <p>구글 로그인을 구현한 프론트 사이트 창입니다.</p>
    // </Layout>
    <div className={styles.container}>
      <main className={styles.main}>
        <button onClick={callApi}>google login</button>
      </main>
    </div>
  );
}
