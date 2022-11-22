declare const window: any
import Script from 'next/script'
import { GOOGLE_ANALYTIC_ID } from '@constants/index'
import { logClear, logDev } from 'utils'

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
 
export const pageview = (url: string) => {
  window.gtag("config", GOOGLE_ANALYTIC_ID, {
    page_path: url,
  });
};
 
export const GA4EventsHandler = ( action: string, category :string, label: string, value: any ) => {
  window.gtag('set', 'page_path', '/new-page.html');
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
}
