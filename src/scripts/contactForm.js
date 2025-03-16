document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Acceder a los valores de los campos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const formData = {
      name: name,
      email: email,
      subject: subject,
      message: message
    };

    fetch('URL_DEL_SCRIPT_DE_GOOGLE_APPS_SCRIPT', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.text())
    .then(data => {
      alert('Message sent successfully!');
      // Restablecer el formulario
      document.getElementById('contactForm').reset();
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was an error sending the message.');
    });
  });