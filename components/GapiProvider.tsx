// import React, { useState, createContext, useEffect, useCallback } from "react";

// export const GapiClientContext = createContext();

export const GAPI_CONFIG = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_apiKey,
  clientId: process.env.GOOGLE_ID,
  scope: "https://www.googleapis.com/auth/gmail.send",
  discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"],
  fetch_basic_profile: true,
  immediate: true,
  plugin_name: "app name",
};

// const GapiContextProvider = ({ session, ...props }) => {
//   const [GapiClient, setGapiClient] = useState();
//   const initClient = useCallback(async () => {
//     if (window.gapiIsInitialized) return;

//     console.log("intting gapi");
//     return gapi.client.init(GAPI_CONFIG).then(
//       () => {
//         const access_token =
//           session.externalAccounts.find(
//             (acct: any) => acct.provider === "gmail"
//           )?.access_token ?? "";

//         if (access_token === "") return;

//         gapi.client.setToken({ access_token });

//         window.gapiIsInitialized = true;
//         setGmailIsDisabled(false);
//         return;
//       },
//       (e) => {
//         window.gapiIsLoading = false;
//         console.info("error init gapi client", e.details);
//       }
//     );
//   }, []);

//   const setupGapi = useCallback(async () => {
//     const gapi = await import("gapi-script").then((pack) => pack.gapi);
//     // https://stackoverflow.com/questions/71040050/why-am-i-getting-syntaxerror-cannot-use-import-statement-outside-a-module
//     setGapiClient({ gapi });

//     try {
//       await gapi.load("client:auth2", initClient);
//     } catch (e) {
//       window.gapiIsLoading = false;
//       console.log("couldnt sign in to gAPI!", e);
//     }
//   }, [initClient]);

//   useEffect(() => {
//     if (window.gapiIsInitialized || window.gapiIsLoading) return;
//     window.gapiIsLoading = true;
//     setupGapi();
//   }, [initClient, setupGapi]);

//   return (
//     <GapiClientContext.Provider
//       value={{GapiClient}} >
//       {props.children}
//     </GapiClientContext.Provider>
//   );
// };

// export default GapiContextProvider;
