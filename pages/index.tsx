import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function IndexPage() {
  return (
    <Layout>
      <h1>Google Oauth front</h1>
      <p>구글 로그인을 구현한 프론트 사이트 창입니다.</p>
    </Layout>
  );
}
