var $countdown = document.querySelector('.countdown-display');
var count = Number($countdown.textContent);

var intervalID = setInterval(countdown, 1000);

function countdown() {
  count--;
  if (count > 0) {
    $countdown.textContent = count;
  } else {
    $countdown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  }
}
