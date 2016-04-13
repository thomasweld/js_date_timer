
// CLOCK

// set initial time on clock for page load
document.querySelector('#clock').innerHTML = (new Date()).toLocaleTimeString();

// setInterval says how often to run timeGoesOn function which
//advances the clock every 1000ms or 1 second
setInterval( timeGoesOn, 1000);

// function is run every 1000ms and assigns
function timeGoesOn(){
  document.querySelector('#clock').innerHTML = (new Date()).toLocaleTimeString();
};

// HEX VALUES

// sets initial random hex value
document.querySelector('#hex').innerHTML = '#' + (Math.random()* 0xFFFFFF << 0 ).toString(16).toUpperCase();
document.querySelector('#colorChange').style.background = document.querySelector('#hex').innerHTML;

setInterval( changeColor, 1000);

function changeColor(){
  document.querySelector('#hex').innerHTML = '#' + (Math.random()* 0xFFFFFF << 0 ).toString(16).toUpperCase();
  document.querySelector('#colorChange').style.background = document.querySelector('#hex').innerHTML;
};
