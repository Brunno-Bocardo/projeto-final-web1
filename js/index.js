// POPUP
const enviar = document.getElementById("btn-enviar");
const fechar = document.getElementById("btn-close");
const modal = document.querySelector("dialog");
const invalido = document.getElementById("btn-invalido")

enviar.onclick = function (event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const senha = document.getElementById("senha").value;
  const planeta =
    document.getElementById("escolha").options[
      document.getElementById("escolha").selectedIndex
    ].text;
  document.getElementById("pop-nome").textContent = nome;
  document.getElementById("pop-planeta").textContent = planeta;
  document.getElementById("pop-email").textContent = email;
  document.getElementById("pop-telefone").textContent = telefone;
  document.getElementById("pop-senha").textContent = senha;
  modal.showModal();
};

fechar.onclick = function () {
  modal.close();
  document.querySelector("form").submit();
};

invalido.onclick = function () {
  modal.close();
};