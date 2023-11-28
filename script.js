// troca do icone do mostrar mais
const button = document.querySelector(".btn.show-more");

button.addEventListener("click", function () {
  const isExpanded = button.getAttribute("aria-expanded") === "true";
  if (isExpanded) {
    // Mudar para o estado "Mostrar menos"
    button.classList.remove("show-more");
    button.classList.add("show-less");
    button.innerHTML = '<i class="bi bi-caret-up"></i> <br> Mostrar menos';
  } else {
    // Mudar para o estado "Mostrar mais"
    button.classList.remove("show-less");
    button.classList.add("show-more");
    button.innerHTML =
      'Mostrar mais&nbsp; <br> <i class="bi bi-caret-down"></i>';
  }
});
// formulario

const form = document.getElementById("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const assunto = document.getElementById("assunto");
const texto = document.getElementById("mensagem");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nomeValue = nome.value;
  const emailValue = email.value;
  const telefoneValue = telefone.value;
  const assuntoValue = assunto.value;
  const textoValue = texto.value;

  const mensagem = [
    nomeValue,
    emailValue,
    telefoneValue,
    assuntoValue,
    textoValue,
  ];

  console.log(mensagem);
  form.reset();
});
