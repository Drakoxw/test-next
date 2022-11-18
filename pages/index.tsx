import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import { roboto, poppins } from '../styles/fonts'
import LayoutOnBoarding from '@layouts/LayoutOnBoarding'
import { useContext, useEffect } from 'react'
import { GetIpClient } from '@services/getIpClient'
import { GlobalCtx, useGlobalCtx } from 'state'
import { logDev } from 'utils'
type RespIp = { ip: string}

export default function Home() {
  const router = useRouter()
  
  if (router.asPath  !== '/') {
    router.push(router.asPath )
  }

  return (
    <LayoutOnBoarding>
      <div className={styles.container}>

          <main className={styles.main}>
            <h1 className={styles.title}>
              Welcome to <a href="https://nextjs.org">Next.js!</a>
            </h1>

            <Link href='/onBoarding/signup/'>
              Signup
            </Link>
            <Link href='/cache/'>Cache</Link>
            <Link href='/resposesApi/rickMorty/'>rickMorty</Link>
            <Link href='/resposesApi/pokeApi/'>Poke Api</Link>
            <Link href='/onBoarding/confirmEmail/'>Confirmar Email</Link>
            <Link href='/onBoarding/createAgent/'>Crear agente </Link>
            <Link href='/onBoarding/createCompany/'>crear Compañia </Link>

            <hr />
            <hr />
            <p className={`${roboto.className}`}>Texto con Roboto</p>
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
    </LayoutOnBoarding>
  )
}

export async function getStaticProps() {
  return {
    props: { 
      event: 'Login',
      page: 'page initial' 
    }
  }
}
