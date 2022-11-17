import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import httpInstance from '../services/http'
import styles from '../styles/Home.module.css'
import { roboto, poppins } from '../styles/fonts'
import { logDev, setToStorage } from '../utils'
import { LoginAve } from '../services'
import TagManager, { GTM_ID } from '../components/tagManager'
import { GapiLoad } from '../components/gapiScript'

const createToken =  async () => {
  logDev('createToken')
  const data = await LoginAve()
  if (data) {
    logDev('Token', data)
    setToStorage('token', data.data.token)
  }
}



export default function Home() {
  const router = useRouter()
  if (router.asPath  !== '/') {
    router.push(router.asPath )
  }
  if (router.asPath === '/kofbalwvlawbevaiwbe') {
    httpInstance().get('/api/secret')
  }
  GapiLoad()

  return (
    <div className={styles.container}>
      <Head>
        <meta httpEquiv="Content-Language" content="es"/>
        <title>Create Next App</title>
        <meta name="description" content="Aveonline.co - Soluciones logisticas" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

        <meta name="application-name" content="PWA App" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Aveonline mobile" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#e3e6e8" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#838c95" />

        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-2.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-1.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://twitter.com/ave_online" />
        <meta name="twitter:title" content="AVE ONLINE" />
        <meta name="twitter:description" content="Servicio Avanzado de Logística" />
        <meta name="twitter:image" content="https://twitter.com/AVE_Online/photo" />
        <meta name="twitter:creator" content="@AVE_Online" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AVE ONLINE" />
        <meta property="og:description" content="Servicio Avanzado de Logística" />
        <meta property="og:site_name" content="AVE ONLINE" />
        <meta property="og:url" content="https://aveonline.co/" />
        <meta property="og:image" content="https://aveonline.co/wp-content/uploads/2022/09/avecolor.png" />

        <link rel='apple-touch-startup-image' href='/images/apple_splash_2048.png' sizes='2048x2732' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_1668.png' sizes='1668x2224' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_1536.png' sizes='1536x2048' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_1125.png' sizes='1125x2436' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_1242.png' sizes='1242x2208' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_750.png' sizes='750x1334' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_640.png' sizes='640x1136' />
        <link rel="apple-touch-icon" href="/icons/favicon-3.png"></link>

      </Head>
      <TagManager></TagManager>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <Link href='/signup/'>
            Signup
          </Link>
          <Link href='/cache/'>Cache</Link>
          <Link href='/resposesApi/rickMorty/'>rickMorty</Link>
          <Link href='/resposesApi/pokeApi/'>Poke Api</Link>
          <Link href='/onBoarding/confirmEmail/'>Confirmar Email</Link>
          <Link href='/onBoarding/createAgent/'>Crear agente </Link>
          <Link href='/onBoarding/createCompany/'>crear Compañia </Link>

          <button onClick={() => createToken() }>Crear token</button>

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
  )
}

export async function getStaticProps() {
  return {
    props: { page: 'page index' },
  }
}
