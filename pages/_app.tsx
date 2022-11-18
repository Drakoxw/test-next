import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import { useRouter } from 'next/router'
import { gtmEventsHandler } from '../components/tagManager'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    const mainDataLayer = {
      event: pageProps.event || null,
      pageTypeName: pageProps.page || null,
      url: router.pathname,
    };

    gtmEventsHandler(mainDataLayer);

  }, [pageProps])
  return <Component {...pageProps} />
}
