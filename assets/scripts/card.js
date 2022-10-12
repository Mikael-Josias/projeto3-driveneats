
const listaPratos = document.querySelectorAll("[data-prato]");
const listaBebidas = document.querySelectorAll("[data-bebida]");
const listaSobremesas = document.querySelectorAll("[data-sobremesa]");

function selecionarComida(card){
    while(!card.hasAttribute("data-prato") && !card.hasAttribute("data-bebida") && !card.hasAttribute("data-sobremesa")){
        card = card.parentElement;
    }

    desmarcarCard(card.parentElement);

    card.classList.add("card--selecionado");
    card.lastElementChild.classList.add("card__selecionado--ativo");
}

function desmarcarCard(card){
    switch (card.dataset.categoria) {
        case "prato":
            listaPratos.forEach(card => {
                card.classList.remove("card--selecionado")
                card.lastElementChild.classList.remove("card__selecionado--ativo");
                card.lastElementChild.classList.add("card__selecionado--inativo");
            })
            break;

        case "bebida":
            listaBebidas.forEach(card => {
                card.classList.remove("card--selecionado")
                card.lastElementChild.classList.remove("card__selecionado--ativo");
                card.lastElementChild.classList.add("card__selecionado--inativo");
            })
            break;

        case "sobremesa":
            listaSobremesas.forEach(card => {
                card.classList.remove("card--selecionado")
                card.lastElementChild.classList.remove("card__selecionado--ativo");
                card.lastElementChild.classList.add("card__selecionado--inativo");
            })
            break;
    
        default:
            break;
    }
}

listaPratos.forEach(card => {
    card.addEventListener("click", (e) => {
        selecionarComida(e.target);
    });
})

listaBebidas.forEach(card => {
    card.addEventListener("click", (e) => {
        selecionarComida(e.target);
    });
})

listaSobremesas.forEach(card => {
    card.addEventListener("click", (e) => {
        selecionarComida(e.target);
    });
})


