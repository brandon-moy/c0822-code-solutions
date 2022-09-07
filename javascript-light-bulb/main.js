var $lightBulb = document.querySelector('.light-bulb');
var $background = document.querySelector('.light');
var light = true;

function flipSwitch(event) {
  var background = '';
  var lightBulb = '';
  if (light === true) {
    background = 'dark';
    lightBulb = 'column-fifth lights-off';
    light = false;
  } else {
    background = 'light';
    lightBulb = 'column-fifth light-bulb';
    light = true;
  }
  $background.className = background;
  $lightBulb.className = lightBulb;
}

$lightBulb.addEventListener('click', flipSwitch);
