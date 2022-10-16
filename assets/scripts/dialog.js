
const dialog = document.querySelector(".confirmation-dialog");

const btnConfirm = document.querySelector(".popup__confirm");
const btnCancel = document.querySelector(".popup__cancel");


function toggleDialog(){
    loadDialog();
    dialog.classList.toggle("hided");
}

function loadDialog() {
    let dish = dialog.querySelector("[data-food='dish']");
    let dishPrice = dialog.querySelector("[data-price='dish-price']");
    let drink = dialog.querySelector("[data-food='drink']");
    let drinkPrice = dialog.querySelector("[data-price='drink-price']");
    let dessert = dialog.querySelector("[data-food='dessert']");
    let dessertPrice = dialog.querySelector("[data-price='dessert-price']");

    let totalPrice = dialog.querySelector("[data-price='total-price']");

    dish.innerHTML = selecoes[0].dataset.prato;
    drink.innerHTML = selecoes[1].dataset.bebida;
    dessert.innerHTML = selecoes[2].dataset.sobremesa;

    dishPrice.innerHTML = selecoes[0].dataset.preco;
    drinkPrice.innerHTML = selecoes[1].dataset.preco;
    dessertPrice.innerHTML = selecoes[2].dataset.preco;

    totalPrice.innerHTML = "R$ " + (Math.round((parseFloat(selecoes[0].dataset.preco.replace(",", ".")) 
                    + parseFloat(selecoes[1].dataset.preco.replace(",", ".")) 
                    + parseFloat(selecoes[2].dataset.preco.replace(",", "."))) * 100) /100).toFixed(2).replace(".",",");
}

function finishOrder(){
    let dish = [selecoes[0].dataset.prato, selecoes[0].dataset.preco];
    let drink = [selecoes[1].dataset.bebida, selecoes[1].dataset.preco];
    let dessert = [selecoes[2].dataset.sobremesa, selecoes[2].dataset.preco];

    let totalValue = Math.round((parseFloat(dish[1].replace(",", ".")) 
                        + parseFloat(drink[1].replace(",", ".")) 
                        + parseFloat(dessert[1].replace(",", "."))) * 100) /100;

    let message = createMessage(dish[0], drink[0], dessert[0], totalValue);

    window.open(`https://wa.me/${restaurantNumber}?text=${message}`, "_blank");
}

btnConfirm.addEventListener("click", () => {
    finishOrder();
})

btnCancel.addEventListener("click", () => {
    toggleDialog();
})