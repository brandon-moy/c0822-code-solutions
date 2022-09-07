var $form = document.querySelector('#contact-form');

function handleSubmit(event) {
  event.preventDefault();
  var values = {
    name: $form.elements.name.value,
    email: $form.elements.email.value,
    message: $form.elements.message.value
  };
  console.log('Message Data:', values);
}

$form.addEventListener('submit', handleSubmit);
