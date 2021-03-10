import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Header } from "../components/header/header";
import { About } from "../components/about/about";
import { Navbar } from "../components/navbar/navbar";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Trip - Branding</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <About />

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trip{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
