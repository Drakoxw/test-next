const gapi = require('gapi')
// import { gapi } from 'gapi'

const client_id = '408604892889-mfd98p19mejclr2r0s1n2defeito8uc8.apps.googleusercontent.com'
const project_id = 'oathtest-364104'
const auth_uri = 'https://accounts.google.com/o/oauth2/auth'
const token_uri = 'https://oauth2.googleapis.com/token'
const auth_provider_x509_cert_url = 'https://www.googleapis.com/oauth2/v1/certs'
const client_secret = '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'
const apiKey = 'AIzaSyAVahL6KXYOO8_nAda_vpTHkqph2fKs9PY'

export function authenticate() {
  return gapi.auth2
    .getAuthInstance()
    .signIn({
      scope:
        'https://www.googleapis.com/auth/analytics.edit https://www.googleapis.com/auth/analytics.readonly',
    })
    .then(
      function () {
        console.log('Sign-in successful');
      },
      function (err: any) {
        console.error('Error signing in', err);
      }
    );
}

export function loadClient() {
  gapi.client.setApiKey(apiKey);
  return gapi.client
    .load('https://content.googleapis.com/discovery/v1/apis/analytics/v3/rest')
    .then(
      function () {
        console.log('GAPI client loaded for API');
      },
      function (err: any) {
        console.error('Error loading GAPI client for API', err);
      }
    );
}
// Make sure the client is loaded and sign-in is complete before calling this method.
export function execute() {
  return gapi.client.analytics.management.profiles
    .get({
      accountId: client_id,
      webPropertyId: project_id,
    })
    .then(
      function (response: any) {
        // Handle the results here (response.result has the parsed body).
        console.log('Response', response);
      },
      function (err: any) {
        console.error('Execute error', err);
      }
    );
}
gapi.load('client:auth2', function () {
  gapi.auth2.init({ client_id: client_id });
})

// <button onclick='authenticate().then(loadClient)'>authorize and load</button>
// <button onclick='execute()'>execute</button>
