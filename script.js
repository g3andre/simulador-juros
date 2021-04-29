

function menuOn() {
    let toggle = document.querySelector('#toggle');

    toggle.classList.toggle('display-none')
}
let btnParcelas = document.querySelector('#btnParcelas');
btnParcelas.addEventListener("click", menuOn);

let parcelasX = document.querySelectorAll(".parce");

let alteraCont = document.querySelectorAll(".outTotal, .outParcelas, .outParValor");

function menuOff() {
    toggle.classList.toggle('display-none')
}
parcelasX.forEach( (parcelas,index) => {parcelas.addEventListener("click", ()=>{
    contadorParcelas(index+1);
})});


function contadorParcelas(parcelas) {
    let inValor = document.querySelector('#inValor');

    let valor = Number(inValor.value);

    if(!valor || isNaN(valor)) {
        alert("Por favor, digite um valor válido!!!");
        inValor.focus();
        return;
    }

    let total = valor + (valor * (parcelas/10) / 1 );
    
    alteraCont[0].textContent = `R$${total.toFixed(2)}`;
    alteraCont[1].textContent = `${parcelas}X`;
    alteraCont[2].textContent = `R$${(total/parcelas).toFixed(2)}`;


    menuOff();
}
/* parcelasX[length].addEventListener("click", contadorParcelas);
 */



