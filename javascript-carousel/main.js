var $left = document.querySelector('.fa-chevron-left');
var $right = document.querySelector('.fa-chevron-right');
var $buttons = document.querySelector('.buttons');
var $icons = $buttons.querySelectorAll('i');
var $arrows = document.querySelector('.arrows');
var $images = $arrows.querySelectorAll('img');
var imgPosition = 0;
var intervalID = null;
intervalID = setInterval(cycle, 3000);

$left.addEventListener('click', left);
$right.addEventListener('click', right);
$buttons.addEventListener('click', button);

function left(event) {
  clearInterval(intervalID);
  intervalID = null;
  imgPosition--;
  if (imgPosition < 0) {
    imgPosition = 4;
  }
  for (var j = 0; j < $images.length; j++) {
    $images[j].className = 'hidden';
    $icons[j].classList.remove('fa-solid');
    $icons[j].classList.add('fa-regular');
  }
  $images[imgPosition].className = '';
  $icons[imgPosition].classList.remove('fa-regular');
  $icons[imgPosition].classList.add('fa-solid');

  intervalID = setInterval(cycle, 3000);
}

function right(event) {
  clearInterval(intervalID);
  intervalID = null;
  imgPosition++;
  if (imgPosition === 5) {
    imgPosition = 0;
  }
  for (var k = 0; k < $images.length; k++) {
    $images[k].className = 'hidden';
    $icons[k].classList.remove('fa-solid');
    $icons[k].classList.add('fa-regular');
  }
  $images[imgPosition].className = '';
  $icons[imgPosition].classList.remove('fa-regular');
  $icons[imgPosition].classList.add('fa-solid');

  intervalID = setInterval(cycle, 3000);
}

function cycle(event) {
  imgPosition++;
  if (imgPosition === 5) {
    imgPosition = 0;
  }
  for (var l = 0; l < $images.length; l++) {
    $images[l].className = 'hidden';
    $icons[l].classList.remove('fa-solid');
    $icons[l].classList.add('fa-regular');
  }
  $images[imgPosition].className = '';
  $icons[imgPosition].classList.remove('fa-regular');
  $icons[imgPosition].classList.add('fa-solid');
}

function button(event) {
  clearInterval(intervalID);
  intervalID = null;
  if (event.target.tagName === 'I') {
    for (var i = 0; i < $icons.length; i++) {
      if (event.target.className === $icons[i].className) {
        imgPosition = i;
        $images[i].className = '';
        $icons[i].classList.remove('fa-regular');
        $icons[i].classList.add('fa-solid');
      } else {
        $images[i].className = 'hidden';
        $icons[i].classList.remove('fa-solid');
        $icons[i].classList.add('fa-regular');
      }
    }
  }
  intervalID = setInterval(cycle, 3000);
}
