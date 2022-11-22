declare const window: any
import Script from 'next/script'
import { GOOGLE_TAG_ID } from '@constants/index'
import { logClear, logDev } from 'utils'

export default function TagManager () {
  return (
    <>
      <Script async defer id="google-tag-manager" strategy="afterInteractive">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GOOGLE_TAG_ID}');
      `}
      </Script>
    </>
  )
}

export const gtmEventsHandler = ( rest: any ) => {
  const event = { date: new Date().toTimeString(), ...rest }
  if ( window && window?.dataLayer) {
    const lastEvent = window.dataLayer[window.dataLayer.length - 1]
    if (lastEvent.pageTypeName !== rest.pageTypeName) {
      window.dataLayer.push(event)
    }
  }
  logClear()
  logDev('dataLayer', window.dataLayer)
}