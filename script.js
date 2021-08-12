'use strict';

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

const temp = {
  0: '#BFEFFF	',
  10: '#87CEEB',
  20: '#42C0FB',
  30: '#0BB5FF',
  40: '#0198E1',
  50: '#B0E2FF',
  60: '#ffff31',
  70: 'orange',
  80: 'darkorange',
  90: 'tomato',
  100: 'orangered',
};

const precip = {
  0: '#F0F8FF	',
  10: 'SkyBlue',
  20: 'LightSkyBlue',
  30: 'DeepSkyBlue',
  40: 'DodgerBlue',
  50: 'DodgerBlue',
  60: 'Blue',
  70: 'MediumBlue',
  80: 'DarkBlue',
  90: 'Navy',
  100: 'MidnightBlue',
};

const wind = {
  0: '#f2def2',
  10: '#eacbeb',
  20: '#e3b8e5',
  30: '#d895da',
  40: '#b57fd2',
  50: '#8e5ad3',
  60: '#742dd2',
  70: '#5e18b9',
  80: '#4d0f9f',
  90: '#2f0566',
  100: '#1b023b',
};

const windDir = {
  N: '#7152ff',
  NNE: '#c0f1d1',
  NE: '#c0f1ec',
  ENE: '#c0cff1',
  E: '#52ff6c',
  ESE: '#ecc0f1',
  SE: '#f1c0e2',
  S: '#f1c0c4',
  SSW: '#daf1c0',
  SW: '#f2d6ab',
  WSW: '#f1e2c0',
  W: '#ff527d',
  WNW: '#d6e594',
  NW: '#b4cfe4',
  NNW: '#c6beea',
};

const cloud = {
  0: '#e0e0e0',
  10: '#cfcfcf',
  20: '#bdbdbd',
  30: '#adadad',
  40: '#9e9e9e',
  50: '#878787',
  60: '#707070',
  70: '#5c5c5c',
  80: '#4d4d4d',
  90: '#424242',
  100: '#333333',
};

const uv = {
  0: '#fae6e6',
  1: '#ffe0e0',
  2: '#ffbdbd',
  3: '#ff8585',
  4: '#ff7070',
  5: '#ff5252',
  6: '#ff3333',
  7: '#ff1a1a',
  8: '#f50000',
  9: '#d60000',
  10: '#a80000',
  11: '#8f0000',
};

function buildUrl(city) {
  return `https://api.weatherbit.io/v2.0/current?city_id=${cityID[city]}&key=82ac8b5cacf346c69247141d3b92817a`;
}

function getDataValue(value) {
  return value;
}

function setVisualTemp(value, element) {
  const percentage = value + 50;
  element.setAttribute(
    'style',
    `background: radial-gradient(circle,${
      temp[Math.ceil(percentage / 10) * 10]
    } 0%,rgba(255, 255, 255, 0) ${percentage}%)`
  );
}

function setVisualOther(value, element, obj, multiplier) {
  const percentage = value * multiplier;
  element.setAttribute(
    'style',
    `background: radial-gradient(circle,${
      obj[Math.ceil(percentage / 10) * 10]
    } 0%,rgba(255, 255, 255, 0) ${percentage}%)`
  );
}

function setVisualUV(value, element, obj) {
  const percentage = value * 10;
  element.setAttribute(
    'style',
    `background: radial-gradient(circle,${obj[value]} 0%,rgba(255, 255, 255, 0) ${percentage}%)`
  );
}

function setVisualWindDir(value, element, obj) {
  element.setAttribute(
    'style',
    `background: radial-gradient(circle,${
      obj[value]
    } 0%,rgba(255, 255, 255, 0) ${50}%)`
  );
}

// setVisualTemp(-10, tempLeft);
// setVisualOther(0, precipLeft, precip, 3);
// setVisualOther(1.79, windLeft, wind, 10);
// setVisualWindDir('SW', windDirLeft, windDir);
// setVisualOther(68, cloudLeft, cloud, 1);
// setVisualUV(3, uvLeft, uv);

async function fetchWeatherDataLeft(city) {
  const data = await fetch(buildUrl(city)).then((response) => response.json());
  console.log(data);

  tempLeft.innerHTML = `${getDataValue(data.data[0].temp)}`;
  precipLeft.innerHTML = `${getDataValue(data.data[0].precip)}`;
  windLeft.innerHTML = `${Math.round(getDataValue(data.data[0].wind_spd))}`;
  windDirLeft.innerHTML = `${getDataValue(data.data[0].wind_cdir)}`;
  cloudLeft.innerHTML = `${getDataValue(data.data[0].clouds)}`;
  uvLeft.innerHTML = `${Math.round(getDataValue(data.data[0].uv))}`;

  setVisualTemp(data.data[0].temp, tempLeft);
  setVisualOther(data.data[0].precip, precipLeft, precip, 3);
  setVisualOther(Math.round(data.data[0].wind_spd), windLeft, wind, 10);
  setVisualWindDir(data.data[0].wind_cdir, windDirLeft, windDir);
  setVisualOther(data.data[0].clouds, cloudLeft, cloud, 1);
  setVisualUV(Math.round(getDataValue(data.data[0].uv)), uvLeft, uv);
}

async function fetchWeatherDataRight(city) {
  const data = await fetch(buildUrl(city)).then((response) => response.json());
  console.log(data);

  tempRight.innerHTML = `${getDataValue(data.data[0].temp)}`;
  precipRight.innerHTML = `${getDataValue(data.data[0].precip)}`;
  windRight.innerHTML = `${Math.round(getDataValue(data.data[0].wind_spd))}`;
  windDirRight.innerHTML = `${getDataValue(data.data[0].wind_cdir)}`;
  cloudRight.innerHTML = `${getDataValue(data.data[0].clouds)}`;
  uvRight.innerHTML = `${Math.round(getDataValue(data.data[0].uv))}`;

  setVisualTemp(data.data[0].temp, tempRight);
  setVisualOther(data.data[0].precip, precipRight, precip, 3);
  setVisualOther(Math.round(data.data[0].wind_spd), windRight, wind, 10);
  setVisualWindDir(data.data[0].wind_cdir, windDirRight, windDir);
  setVisualOther(data.data[0].clouds, cloudRight, cloud, 1);
  setVisualUV(Math.round(getDataValue(data.data[0].uv)), uvRight, uv);
}

const cityID = {
  london: 2643743,
  berlin: 2950159,
  rykjavík: 3413829,
  fairbanks: 4855951,
};

fetchWeatherDataLeft('london');
fetchWeatherDataRight('berlin');
