const form = document.getElementById("form_B_Maior_A");
let validarForm;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const numeroA = document.getElementById("number_a");
  const numeroB = document.getElementById("number_b");
  const mensagemSucesso = `B(${numeroB.value}) é Maior que A(${numeroA.value})`;
  const mensagemError = `B(${numeroB.value}) não é maior que A(${numeroA.value})`;

  validarForm = numeroB.value > numeroA.value;

  if (validarForm) {
    const containerMensagemSucesso = document.querySelector(".sucess-message");
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = "block";
  } else {
    const containerMensagemError = document.querySelector(".error-message");
    containerMensagemError.innerHTML = mensagemError;
    containerMensagemError.style.display = "block";
  }
});
