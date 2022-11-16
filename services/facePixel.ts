
const adsSdk = require('facebook-nodejs-business-sdk')
const Content = adsSdk.Content;
const CustomData = adsSdk.CustomData;
const DeliveryCategory = adsSdk.DeliveryCategory;
const EventRequest = adsSdk.EventRequest;
const UserData = adsSdk.UserData;
const ServerEvent = adsSdk.ServerEvent;

const access_token = '<ACCESS_TOKEN>';
const pixel_id = '<ADS_PIXEL_ID>';
const api = adsSdk.FacebookAdsApi.init(access_token);

let current_timestamp = Math.floor(new Date().getTime() / 1000);

const userData = (new UserData())
                .setEmails(['joe@eg.com'])
                .setPhones(['12345678901', '14251234567'])
                // It is recommended to send Client IP and User Agent for Conversions API Events.
                // .setClientIpAddress(request.connection.remoteAddress)
                .setClientIpAddress('')
                // .setClientUserAgent(request.headers['user-agent'])
                .setClientUserAgent('')
                .setFbp('fb.1.1558571054389.1098115397')
                .setFbc('fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890');

const content = (new Content())
                .setId('product123')
                .setQuantity(1)
                .setDeliveryCategory(DeliveryCategory.HOME_DELIVERY);

const customData = (new CustomData())
                .setContents([content])
                .setCurrency('usd')
                .setValue(123.45);

const serverEvent = (new ServerEvent())
                .setEventName('Purchase')
                .setEventTime(current_timestamp)
                .setUserData(userData)
                .setCustomData(customData)
                .setEventSourceUrl('https://test-next-lake.vercel.app')
                .setActionSource('website');

const eventsData = [serverEvent];
const eventRequest = (new EventRequest(access_token, pixel_id))
                .setEvents(eventsData);

export { eventRequest }

// eventRequest.execute().then(
//   (response: any) => {
//     console.log('Response: ', response);
//   },
//   (err: any) => {
//     console.error('Error: ', err);
//   }
// );
