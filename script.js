'use strict';

const cityID = {
  london: 2643743,
  berlin: 2950159,
};

// LEFT
const tempLeft = document.querySelector('.data--circle--temp--left');
const precipLeft = document.querySelector('.data--circle--precip--left');
const windLeft = document.querySelector('.data--circle--wind--left');
const windDirLeft = document.querySelector('.data--circle--winddir--left');
const cloudLeft = document.querySelector('.data--circle--cloud--left');
const uvLeft = document.querySelector('.data--circle--uv--left');

// RIGHT
const tempRight = document.querySelector('.data--circle--temp--right');
const precipRight = document.querySelector('.data--circle--precip--right');
const windRight = document.querySelector('.data--circle--wind--right');
const windDirRight = document.querySelector('.data--circle--winddir--right');
const cloudRight = document.querySelector('.data--circle--cloud--right');
const uvRight = document.querySelector('.data--circle--uv--right');

function buildUrl(city) {
  return `https://api.weatherbit.io/v2.0/current?city_id=${cityID[city]}&key=82ac8b5cacf346c69247141d3b92817a`;
}

function getDataValue(value) {
  return value;
}

async function fetchWeatherDataLeft(city) {
  const data = await fetch(buildUrl(city)).then((response) => response.json());
  console.log(data);

  tempLeft.innerHTML = `${getDataValue(data.data[0].temp)}`;
  precipLeft.innerHTML = `${getDataValue(data.data[0].precip)}`;
  windLeft.innerHTML = `${getDataValue(data.data[0].wind_spd)}`;
  windDirLeft.innerHTML = `${getDataValue(data.data[0].wind_cdir)}`;
  cloudLeft.innerHTML = `${getDataValue(data.data[0].clouds)}`;
  uvLeft.innerHTML = `${Math.round(getDataValue(data.data[0].uv))}`;
}

async function fetchWeatherDataRight(city) {
  const data = await fetch(buildUrl(city)).then((response) => response.json());
  console.log(data);

  tempRight.innerHTML = `${getDataValue(data.data[0].temp)}`;
  precipRight.innerHTML = `${getDataValue(data.data[0].precip)}`;
  windRight.innerHTML = `${getDataValue(data.data[0].wind_spd)}`;
  windDirRight.innerHTML = `${getDataValue(data.data[0].wind_cdir)}`;
  cloudRight.innerHTML = `${getDataValue(data.data[0].clouds)}`;
  uvRight.innerHTML = `${Math.round(getDataValue(data.data[0].uv))}`;
}

// Temprature
// Cloud Cover
// Rain
// Wind Speed
// Wind direction
// Snow
// Current air quality

fetchWeatherDataLeft('london');
fetchWeatherDataRight('berlin');
