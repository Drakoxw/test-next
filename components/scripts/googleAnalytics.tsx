declare const window: any
import Script from 'next/script'
import { GOOGLE_ANALYTIC_ID } from '@constants/index'
import { logClear, logDev } from 'utils'

export default function GoogleAnalytics () {
  return (
  <>
    <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"/>
    <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ANALYTIC_ID}', {
            page_path: window.location.pathname,
          });
        `,
        }}
    />
  </>
  )
}
