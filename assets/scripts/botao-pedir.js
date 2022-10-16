
const restaurantNumber = "5511951598902";
const btnPedir = document.querySelector("#btnPedir");
var selecoes = 0;

var clientName;
var clientCep;

var whatsappMessage = "";

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

function makeOrder(){
    askNameAndCep();
    toggleDialog();

}

btnPedir.addEventListener("click", (e) => {
    
    makeOrder();
})

function askNameAndCep(){
    clientName = prompt("Preencha seu Nome:");
    clientCep = prompt("Preencha seu endereço:");
}

function createMessage(dish, drink, dessert, total){
    whatsappMessage = `Olá, gostaria de fazer o pedido:
                        \n- Prato: ${dish}
                        \n- Bebida: ${drink}
                        \n- Sobremesa: ${dessert}
                        \nTotal: R$ ${total}`;

    if (clientName && clientCep) {
        whatsappMessage += `\n\n Nome: ${clientName}
                            \n Endereço: ${clientCep}`;
    }

    return window.encodeURIComponent(whatsappMessage);
}
