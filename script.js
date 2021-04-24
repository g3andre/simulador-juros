function menuOn() {
    let toggle = document.querySelector('#toggle');

    if(toggle.style.display == 'block') {
        toggle.style.display = 'none';
    } else {
        toggle.style.display = 'block'
    }
}
let btnParcelas = document.querySelector('#btnParcelas');
btnParcelas.addEventListener("click", menuOn);

let parcelasX = document.querySelectorAll(".parce1, .parce2, .parce3, .parce4, .parce5");
let alteraCont = document.querySelectorAll(".outTotal, .outParcelas, .outParValor");

function menuOff() {
    toggle.style.display = 'none';
}
parcelasX[0].addEventListener("click", menuOff);
parcelasX[1].addEventListener("click", menuOff);
parcelasX[2].addEventListener("click", menuOff);
parcelasX[3].addEventListener("click", menuOff);
parcelasX[4].addEventListener("click", menuOff);

function contadorParcelas() {
    let inValor = document.querySelector('#inValor');

    let valor = Number(inValor.value);

    if(valor == "" || isNaN(valor)) {
        alert("Por favor, digite um valor válido!!!");
        inValor.focus();
        return;
    }

    if(parcelasX.length) {
        let total = valor + (valor * 0.1) / 1;

        alteraCont[0].textContent = `R$${total.toFixed(2)}`;
        alteraCont[1].textContent = `1X`;
        alteraCont[2].textContent = `R$${total.toFixed(2)}`;
    }
}
parcelasX[0].addEventListener("click", contadorParcelas);

function contadorParcelas2() {
    let inValor = document.querySelector('#inValor');

    let valor = Number(inValor.value);

    if(valor == "" || isNaN(valor)) {
        alert("Por favor, digite um valor válido!!!");
        inValor.focus();
        return;
    }

    let total2 = valor + (valor * 0.2);

    if(parcelasX.length) {
        alteraCont[0].textContent = `R$${total2.toFixed(2)}`;
        alteraCont[1].textContent = `2X`;
        alteraCont[2].textContent = `R$${total2.toFixed(2) / 2}`;
    }
}
parcelasX[1].addEventListener("click", contadorParcelas2);

function contadorParcelas3() {
    let inValor = document.querySelector('#inValor');

    let valor = Number(inValor.value);

    if(valor == "" || isNaN(valor)) {
        alert("Por favor, digite um valor válido!!!");
        inValor.focus();
        return;
    }

    let total3 = valor + (valor * 0.3);

    if(parcelasX.length) {
        alteraCont[0].textContent = `R$${total3.toFixed(2)}`;
        alteraCont[1].textContent = `3X`;
        alteraCont[2].textContent = `R$${total3.toFixed(2) / 3}`;
    }
}
parcelasX[2].addEventListener("click", contadorParcelas3);

function contadorParcelas4() {
    let inValor = document.querySelector('#inValor');

    let valor = Number(inValor.value);

    if(valor == "" || isNaN(valor)) {
        alert("Por favor, digite um valor válido!!!");
        inValor.focus();
        return;
    }

    let total4 = valor + (valor * 0.4);

    if(parcelasX.length) {
        alteraCont[0].textContent = `R$${total4.toFixed(2)}`;
        alteraCont[1].textContent = `4X`;
        alteraCont[2].textContent = `R$${total4.toFixed(2) / 4}`;
    }
}
parcelasX[3].addEventListener("click", contadorParcelas4);

function contadorParcelas5() {
    let inValor = document.querySelector('#inValor');

    let valor = Number(inValor.value);

    if(valor == "" || isNaN(valor)) {
        alert("Por favor, digite um valor válido!!!");
        inValor.focus();
        return;
    }

    let total5 = valor + (valor * 0.5);

    if(parcelasX.length) {
        alteraCont[0].textContent = `R$${total5.toFixed(2)}`;
        alteraCont[1].textContent = `5X`;
        alteraCont[2].textContent = `R$${total5.toFixed(2) / 5}`;
    }
}
parcelasX[4].addEventListener("click", contadorParcelas5);





