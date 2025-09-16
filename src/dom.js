function changeDOM(object) {
  const cityNameElement = document.querySelector('.city-name');
  if (cityNameElement && object && object.address) {
    cityNameElement.textContent = object.address;
  } else {
    console.error('City name element not found or address missing');
  }
  const liveTemp = document.querySelector('.temperature');
  if (liveTemp && object && object.days[0].temp) {
    liveTemp.textContent = object.days[0].temp;
  } else {
    console.error('liveTemp element not found or missing');
  }
  const description = document.querySelector('.description');
  if (description && object && object.days[0].conditions) {
    description.textContent = object.days[0].conditions;
  } else {
    console.error('description element not found or missing');
  }
  const extraInfo = document.querySelector('.extra-info');
  if (extraInfo && object && object.days[0].description) {
    extraInfo.textContent = object.days[0].description;
  } else {
    console.error('liveTemp element not found or missing');
  }
}
export { changeDOM };
