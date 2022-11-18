declare const window: any;

import Script from 'next/script'
export const GTM_ID = 'GTM-5BCN4K8'

export default function TagManager () {
  return (
    <>
      <Script id="google-tag-manager" strategy="afterInteractive">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `}
      </Script>
    </>
  )
}

export const gtmEventsHandler = ( rest: any ) => {
  const event = { date: new Date().toTimeString(), ...rest }
  if ( window && window?.dataLayer) {
    const lastEvent = window.dataLayer[window.dataLayer.length - 1]
    if (lastEvent.pageTypeName !== event.pageTypeName) {
      window.dataLayer.push(event)
    }
  }
}