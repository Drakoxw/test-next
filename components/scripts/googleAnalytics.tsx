declare const window: any
import Script from 'next/script'
import { GOOGLE_ANALYTIC_ID } from '@constants/index'

export default function GoogleAnalytics () {
  const srcUrl = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTIC_ID}`
  return (
  <>
    <Script async defer strategy="afterInteractive" src={srcUrl}/>
    <Script
      async defer
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', '${GOOGLE_ANALYTIC_ID}');
        `,
        }}
    />
  </>
  )
}

