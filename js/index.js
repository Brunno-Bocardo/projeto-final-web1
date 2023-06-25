// POPUP
const enviar = document.getElementById("btn-enviar")
const fechar = document.getElementById("btn-close")
const modal = document.querySelector("dialog")
enviar.onclick = function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const planeta = document.getElementById("escolha").options[document.getElementById("escolha").selectedIndex].text;

    document.getElementById("pop-nome").textContent = nome;
    document.getElementById("pop-planeta").textContent = planeta;

    modal.showModal()
};
fechar.onclick = function () {
    modal.close()
    document.querySelector("form").submit();
};


// FAQ
const abrir = document.querySelectorAll(".item");

abrir.forEach(function (item) {
  item.addEventListener("click", function () {
    console.log("aaa")
    const itemAtivoAtual = document.querySelector(".ativo");

    if (itemAtivoAtual) {
      itemAtivoAtual.classList.remove("ativo");
    }
    item.classList.add("ativo");
  });
});
