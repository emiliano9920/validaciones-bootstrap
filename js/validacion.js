function validaciones() {
  let contraseña1 = document.querySelector('#password1');
  let contraseña2 = document.querySelector('#password2');
  let terminos = document.querySelector('#btnTerminos');
  let validity = true;

  if (contraseña1.value != contraseña2.value || !contraseña1.checkValidity()) {
    contraseña2.setCustomValidity(false);
    validity = false;
  } else {
    contraseña2.setCustomValidity('');
  }

  if (!terminos.checked) {
    validity = false;
    document.querySelector('#btnTerminos').classList.add('invalid-color');
    document.querySelector('#feedback-modal-terminos').style.display = 'inline';
  } else {
    document.querySelector('#btnTerminos').classList.remove('invalid-color');
    document.querySelector('#feedback-modal-terminos').style.display = 'none';
  }

  return validity;
}

document.querySelector('#myForm').addEventListener('submit', evento => {
  if (!validaciones() || !this.checkValidity()) {
    evento.preventDefault();
    evento.stopPropagation();
  }
  document.body.classList.add('was-validated');
  ['change', 'input'].forEach(ev => {
    document.body.addEventListener(ev, validaciones);
  });
});
