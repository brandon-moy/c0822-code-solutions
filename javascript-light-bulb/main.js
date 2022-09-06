var $lightBulb = document.querySelector('.light-bulb');
var $background = document.querySelector('.light');

function flipSwitch(event) {
  var background = '';
  var lightBulb = '';
  if ($background.className === 'light') {
    background = 'dark';
    lightBulb = 'column-fifth lights-off';
  } else {
    background = 'light';
    lightBulb = 'column-fifth light-bulb';
  }
  $background.className = background;
  $lightBulb.className = lightBulb;
}

$lightBulb.addEventListener('click', flipSwitch);
