$(document).ready(function () {
    $('.modal').modal()
  })

  function submitInfo(e) {
    e.preventDefault()

    let formData = {
      first_name : document.getElementById('first_name').value,
      last_name : document.getElementById('last_name').value,
      email : document.getElementById('email').value,
      password : document.getElementById('password').value
    };
  
    console.log("Form Data Submitted: ", formData)

    document.getElementById('first_name').value = '';
    document.getElementById('last_name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';

    var instance = M.Modal.getInstance(document.getElementById('modal1'));
    instance.close();

  }