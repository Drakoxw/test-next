import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import { useRouter } from 'next/router'
import { gtmVirtualPageView } from '../components/tagManager'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    const mainDataLayer = {
      pageTypeName: pageProps.page || null,
      url: router.pathname,
    };

    gtmVirtualPageView(mainDataLayer);

  }, [pageProps])
  return <Component {...pageProps} />
}
