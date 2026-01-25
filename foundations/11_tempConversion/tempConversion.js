const convertToCelsius = function(f) {
  let c = (f-32)*5/9;
  const round = Math.round(c*10)/10;
  return round;
};

const convertToFahrenheit = function(c) {
  let f = (c*9/5)+32;
  const round = Math.round(f*10)/10;
  return round;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
