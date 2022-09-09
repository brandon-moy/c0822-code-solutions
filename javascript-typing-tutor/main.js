var $letter = document.querySelectorAll('span');
var $modal = document.querySelector('.hidden');
var $percentage = document.querySelector('.percentage');
var $yes = document.querySelector('#yes');
var $no = document.querySelector('#no');
var typePosition = 0;
var count = 0;

function typingTester(event) {
  var position = $letter[typePosition];
  var future = typePosition + 1;

  if (event.key === position.textContent) {
    position.className = 'correct';
    $letter[future].className = 'underline';
    typePosition = future;
  } else {
    position.className = 'incorrect';
  }

  count++;
}

function openModal(event) {
  var end = $letter.length - 1;
  var keyClicks = count + 1;
  if ($letter[end].className === 'correct') {
    $modal.className = 'screen-background';
  }
  var percentage = (($letter.length / keyClicks) * 100);
  $percentage.textContent = 'Accuracy: ' + Math.floor(percentage) + '%';
}

function closeModal(event) {
  $modal.className = 'screen-background hidden';
}

function resetTutor(event) {
  typePosition = 0;
  count = 0;
  $modal.className = 'screen-background hidden';
  for (var i = 0; i < $letter.length; i++) {
    if (i === 0) {
      $letter[i].className = 'underline';
    } else {
      $letter[i].className = '';
    }
  }
}

document.addEventListener('keydown', typingTester);
document.addEventListener('keyup', openModal);
$yes.addEventListener('click', resetTutor);
$no.addEventListener('click', closeModal);
