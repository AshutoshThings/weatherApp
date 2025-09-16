import { changeDOM } from './dom.js';
function getData(cityName) {
  // let cityName = 'Mumbai';
  let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}/today?unitGroup=metric&key=MX9DLJYTJ4G7NNRFACUL5HXPS&contentType=json&include=events`;
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw response;
      }
      return response.json();
    })
    .then((data) => {
      console.log('Weather data:', data);
      changeDOM(data);
      console.log(data.days[0].temp);
    })
    .catch((errorResponse) => {
      if (errorResponse.text) {
        errorResponse.text().then((errorMessage) => {
          console.error('Error message:', errorMessage);
        });
      } else {
        console.error('An error occurred:', errorResponse);
      }
    });
}
export { getData };
