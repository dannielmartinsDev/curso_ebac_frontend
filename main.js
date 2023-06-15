const form = document.getElementById("form_B_Maior_A");
let validacao;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const valorA = document.getElementById("number_a");
  const valorB = document.getElementById("number_b");
  const mensagemSucesso = `O valor <b>B(${valorB.value})</b> é maior que o valor <b>A(${valorA.value}</b>)`;
  const mensagemError = `O valor <b>B(${valorB.value})</b> não é maior que o valor <b>A(${valorA.value}</b>)`;

  validacao = valorB.value > valorA.value;

  if (validacao) {
    const containerMensagemSucesso = document.querySelector(".sucess-message");
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = "block";
  } else {
    const containerMensagemError = document.querySelector(".error-message");
    containerMensagemError.innerHTML = mensagemError;
    containerMensagemError.style.display = "block";
  }
});
