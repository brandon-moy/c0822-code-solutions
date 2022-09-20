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
    if (imgPosition === j) {
      $images[j].className = '';
      $icons[j].classList.remove('fa-regular');
      $icons[j].classList.add('fa-solid');
    } else {
      $images[j].className = 'hidden';
      $icons[j].classList.remove('fa-solid');
      $icons[j].classList.add('fa-regular');
    }
  }
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
    if (imgPosition - 1 === k) {
      $images[k].className = '';
      $icons[k].classList.remove('fa-regular');
      $icons[k].classList.add('fa-solid');
    } else {
      $images[k].className = 'hidden';
      $icons[k].classList.remove('fa-solid');
      $icons[k].classList.add('fa-regular');
    }
  }
  intervalID = setInterval(cycle, 3000);
}

function cycle(event) {
  imgPosition++;
  if (imgPosition === 5) {
    imgPosition = 0;
  }
  for (var k = 0; k < $images.length; k++) {
    if (imgPosition === k) {
      $images[k].className = '';
      $icons[k].classList.remove('fa-regular');
      $icons[k].classList.add('fa-solid');
    } else {
      $images[k].className = 'hidden';
      $icons[k].classList.remove('fa-solid');
      $icons[k].classList.add('fa-regular');
    }
  }
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
