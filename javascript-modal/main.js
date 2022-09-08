// get dom button element and add an event listener on click to open modal
// function needs to create modal
// append modal to the body?

var $modal = document.querySelector('.hidden');
var $openModal = document.querySelector('.open-button');
var $closeModal = document.querySelector('.modal-button');

function showModal(event) {
  $modal.className = 'screen-background';
}

function hideModal(event) {
  $modal.className = 'screen-background hidden';
}

$openModal.addEventListener('click', showModal);
$closeModal.addEventListener('click', hideModal);
