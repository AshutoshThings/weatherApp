function getData() {
  fetch(
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/location/today?unitGroup=metric&key=MX9DLJYTJ4G7NNRFACUL5HXPS&contentType=json&include=events',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw response;
      }
      return response.json();
    })
    .then((data) => {
      console.log('Weather data:', data);
    })
    .catch((errorResponse) => {
      if (errorResponse.text) {
        // Additional error information
        errorResponse.text().then((errorMessage) => {
          console.error('Error message:', errorMessage);
        });
      } else {
        console.error('An error occurred:', errorResponse);
      }
    });
}
export { getData };
