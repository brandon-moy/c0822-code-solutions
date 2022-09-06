var $lightBulb = document.querySelector('.light-bulb');
var $background = document.querySelector('.light');
var light = 'on';

function flipSwitch(event) {
  var background = '';
  var lightBulb = '';
  if (light === 'on') {
    background = 'dark';
    lightBulb = 'column-fifth lights-off';
    light = 'off';
  } else {
    background = 'light';
    lightBulb = 'column-fifth light-bulb';
    light = 'on';
  }
  $background.className = background;
  $lightBulb.className = lightBulb;
}

$lightBulb.addEventListener('click', flipSwitch);
