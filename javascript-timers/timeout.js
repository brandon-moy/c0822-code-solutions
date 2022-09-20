var $message = document.querySelector('.message');

function changeMessage() {
  $message.textContent = 'Hello There';
}

setTimeout(changeMessage, 2000);
