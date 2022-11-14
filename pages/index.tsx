import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import httpInstance from '../services/http'
import styles from '../styles/Home.module.css'
import { roboto, poppins } from '../styles/fonts'

export default function Home() {
  const router = useRouter()
  if (router.asPath  !== '/') {
    router.push(router.asPath )
  }
  if (router.asPath === '/kofbalwvlawbevaiwbe') {
    httpInstance().get('/api/secret')
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <Link href='/signup/'>
          Signup
        </Link>

        <hr />
        <p className={roboto.className}>Texto con Roboto</p>
        <p >Texto sin Roboto</p>
        <hr />
        <p className={poppins.className}>Texto con poppins</p>
        <p >Texto sin poppins</p>
        <hr />

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
