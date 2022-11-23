import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import { gtmEventsHandler } from '../components/scripts/tagManager'

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {

    const mainDataLayer = {
      event: pageProps.event || null,
      pageTypeName: pageProps.page || null,
    };

    gtmEventsHandler(mainDataLayer);

  }, [pageProps])
  return <Component {...pageProps} />
}
