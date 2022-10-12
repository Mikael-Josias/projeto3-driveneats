
const btnPedir = document.querySelector("#btnPedir");

btnPedir.setAttribute("disabled", "disabled");

function verificarSelecoes(){
    let selecoes = document.querySelectorAll(".card--selecionado");

    if (selecoes.length == 3) {
        btnPedir.disabled = false;
        btnPedir.textContent = "Fechar pedido";
        btnPedir.classList.remove("rodape__pedir--inativo");
        btnPedir.classList.add("rodape__pedir--ativo");
    }else{
        btnPedir.disabled = true;
    }
}

btnPedir.addEventListener("click", (e) => {
    console.log("funcionou")
})