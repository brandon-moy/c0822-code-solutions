var clicks = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

function clickIncrease(event) {
  clicks += 1;
  var newText = 'Clicks: ' + clicks;
  $clickCount.textContent = newText;
  if (clicks < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (clicks < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (clicks < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (clicks < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (clicks < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}

$hotButton.addEventListener('click', clickIncrease);
