

var contactForm = document.querySelector('#contactform')
  contactForm.addEventListener("submit", function(event) {
    console.log('form submitted');
    
    event.preventDefault();
    
    var formName = document.querySelector('#form-name');
    var formEmail = document.querySelector('#form-email');
    var formMessage = document.querySelector('#form-message');

    var formData = {
      name : formName.value,
      email : formEmail.value,
      message : formMessage.value,
    }
    
    //console.log(formName.value);

    fetch('http://localhost:8000/contacts', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then(function(resp) {
        return resp.json();
      })
      .then(function(data) {
        //succesfully submitted
        console.log(data);

      })
      .catch(function (error) {
        //something error happened
        console.error(error);
      });
  });

  console.log('selesai')