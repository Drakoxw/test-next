import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import { useRouter } from 'next/router'
import { gtmEventsHandler } from '../components/scripts/tagManager'
import { useGlobalCtx } from 'state';
import { GetIpClient } from '@services/getIpClient';
import { logDev } from 'utils';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  let ip = useGlobalCtx().ipClient

  useEffect(() => {
    const getIp = async () => {
      const res = await GetIpClient()
      return res.data.ip
    }

    const mainDataLayer = {
      ip: '',
      event: pageProps.event || null,
      pageTypeName: pageProps.page || null,
      url: router.pathname,
    };

    try {
      if (!ip) { 
        getIp().then(ipCli => {
          mainDataLayer.ip = ipCli
          gtmEventsHandler(mainDataLayer);
        })
      } else {
        gtmEventsHandler(mainDataLayer);
      } 
    } catch (_) {
      gtmEventsHandler(mainDataLayer);
    }

  }, [pageProps])
  return <Component {...pageProps} />
}
