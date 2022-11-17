export const null0 = ''
// import React, { useState, useEffect } from 'react';
// import { gapi, loadAuth2 } from 'gapi-script'

// import { AnyARecord } from 'dns';

// export const GoogleLoginButton  = () => {
//   const [user, setUser] = useState(null);
//   const idCli = '408604892889-mfd98p19mejclr2r0s1n2defeito8uc8.apps.googleusercontent.com'

//   useEffect(() => {
//     const setAuth2 = async () => {
//       const auth2 = await loadAuth2(gapi, idCli, '')
//       if (auth2.isSignedIn.get()) {
//           updateUser(auth2.currentUser.get())
//       } else {
//           attachSignin(document.getElementById('customBtn'), auth2);
//       }
//     }
//     setAuth2();
//   }, []);

//   useEffect(() => {
//     if (!user) {
//       const setAuth2 = async () => {
//         const auth2 = await loadAuth2(gapi, '408604892889-mfd98p19mejclr2r0s1n2defeito8uc8.apps.googleusercontent.com', '')
//         attachSignin(document.getElementById('customBtn'), auth2);
//       }
//       setAuth2();
//     }
//   }, [user])

//   const updateUser = (currentUser: any) => {
//     const name = currentUser.getBasicProfile().getName();
//     const profileImg = currentUser.getBasicProfile().getImageUrl();
//     setUser({
//       name: name,
//       profileImg: profileImg,
//     });
//   };

//   const attachSignin = (element: any, auth2: any) => {
//     auth2.attachClickHandler(element, {},
//       (googleUser: any) => {
//         updateUser(googleUser);
//       }, (error: AnyARecord) => {
//       console.log(JSON.stringify(error))
//     });
//   };

//   const signOut = () => {
//     const auth2 = gapi.auth2.getAuthInstance();
//     auth2.signOut().then(() => {
//       setUser(null);
//       console.log('User signed out.');
//     });
//   }

//   if(user) {
//     return (
//       <div className="container">
//         <div id="" className="btn logout" onClick={signOut}>
//           Logout
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container">
//       <div id="customBtn" className="btn login">
//         Login
//       </div>
//     </div>
//   );
// }