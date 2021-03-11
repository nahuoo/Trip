import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { Header } from '../components/header/header'
import { About } from '../components/about/about'
import { Navbar } from '../components/navbar/navbar'
import { Hero } from '../components/hero/hero'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
  const [isWindow, setIsWindow] = useState(false)
  useEffect(() => {
    setIsWindow(true)
    Aos.init({ duration: 1000 })
    console.log(isWindow)
  }, [])
  if (!isWindow) {
    return <div>hola cadhe</div>
  } else {
    return (
      <div>
        <Head>
          <title>Trip - Branding</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <About />
        <Hero />
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Trip{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    )
  }
}
