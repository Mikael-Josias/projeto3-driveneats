
const restaurantNumber = "5511951598902";
const btnPedir = document.querySelector("#btnPedir");
var selecoes = 0;

var clientName = "";
var clientCep = "";

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

    let dish = [selecoes[0].dataset.prato, selecoes[0].dataset.preco];
    let drink = [selecoes[1].dataset.bebida, selecoes[1].dataset.preco];
    let dessert = [selecoes[2].dataset.sobremesa, selecoes[2].dataset.preco];

    let totalValue = Math.round((parseFloat(dish[1].replace(",", ".")) 
                        + parseFloat(drink[1].replace(",", ".")) 
                        + parseFloat(dessert[1].replace(",", "."))) * 100) /100;

    let message = createMessage(dish[0], drink[0], dessert[0], totalValue);

    window.open(`https://wa.me/${restaurantNumber}?text=${message}`, "_blank");
}

btnPedir.addEventListener("click", (e) => {
    
    makeOrder();
    console.log("funcionou")
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

    return window.encodeURIComponent(whatsappMessage);
}
