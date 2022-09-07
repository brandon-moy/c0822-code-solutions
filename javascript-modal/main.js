// get dom button element and add an event listener on click to open modal
// function needs to create modal
// append modal to the body?

var $openModal = document.querySelector('.open-modal');
var $closeModal = document.querySelector('.button');
var $screenBackground = document.querySelector('.screen');
var $modalBackground = document.querySelector('.modal');
var $modalHeader = document.querySelector('.header');
var $modalButton = document.querySelector('.button');

function openModal(event) {
  $modalHeader.textContent = 'Would you like to take a survey?';
  $modalButton.textContent = 'NO';

  $screenBackground.className = 'screen-background';
  $modalBackground.className = 'modal-background';
  $modalHeader.className = 'modal-header';
  $modalButton.className = 'modal-button';
}

function closeModal(event) {
  $modalHeader.textContent = '';
  $modalButton.textContent = '';

  $screenBackground.className = 'screen';
  $modalBackground.className = 'modal';
  $modalHeader.className = 'header';
  $modalButton.className = 'button';
}

$openModal.addEventListener('click', openModal);
$closeModal.addEventListener('click', closeModal);
