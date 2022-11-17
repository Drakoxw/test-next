declare const window: any;

import Script from "next/script"
import { logDev } from "../utils"
export const GTM_ID = "GTM-5BCN4K8"


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

export const gtmVirtualPageView = (rest: any) => {
  if ( window && window?.dataLayer) {
    window.dataLayer?.push({
      event: 'VirtualPageView',
      ...rest,
    })
    console.log('dataLayer', window.dataLayer)
  }
}