
const restaurantNumber = "5511951598902";
const btnPedir = document.querySelector("#btnPedir");
var selecoes = 0;

btnPedir.setAttribute("disabled", "disabled");

function verificarSelecoes(){
    selecoes = document.querySelectorAll(".card--selecionado");

    if (selecoes.length == 3) {
        btnPedir.disabled = false;
        btnPedir.textContent = "Fechar pedido";
        btnPedir.classList.remove("rodape__pedir--inativo");
        btnPedir.classList.add("rodape__pedir--ativo");
    }else{
        btnPedir.disabled = true;
    }
}

function fazerPedido(){
    let prato = [selecoes[0].dataset.prato, selecoes[0].dataset.preco];
    let bebida = [selecoes[1].dataset.bebida, selecoes[1].dataset.preco];
    let sobremesa = [selecoes[2].dataset.sobremesa, selecoes[2].dataset.preco];

    let valorTotal = parseFloat(prato[1].replace(",", ".")) + parseFloat(bebida[1].replace(",", ".")) + parseFloat(sobremesa[1].replace(",", "."));

    let mensagem = window.encodeURIComponent("Olá, gostaria de fazer o pedido:\n- Prato: " + prato[0] + "\n- Bebida: " + bebida[0] + "\n- Sobremesa: " + sobremesa[0] + "\nTotal: R$ " + valorTotal.toFixed(2));

    window.open(`https://wa.me/${restaurantNumber}?text=${mensagem}`, "_blank");
}

btnPedir.addEventListener("click", (e) => {
    
    fazerPedido();
    console.log("funcionou")
})