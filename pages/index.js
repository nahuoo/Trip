import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { Header } from '../components/header/header'
import { About } from '../components/about/about'
import { Navbar } from '../components/navbar/navbar'
import { Hero } from '../components/hero/hero'
import { Services } from '../components/services/services'
import { Form} from '../components/form/form'
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
    return <div>hola</div>
  } else {
    return (
      <div style={{background: 'black'}}>
        <Head>
          <title>Trip - Branding</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <About />
        <Services />
        <Hero />
        <Form />
        <footer className={styles.footer}>
          <p>{`Trip - `}</p>
          <strong> Mar del Plata </strong>
        </footer>
      </div>
    )
  }
}
