function contadorParcelas() {
    let inValor = document.querySelector('#inValor');
    let outParce1 = document.querySelector('.outParce1');
    let outParce2 = document.querySelector('.outParce2');
    let outParce3 = document.querySelector('.outParce3');
    let outParce4 = document.querySelector('.outParce4');
    let outParce5 = document.querySelector('.outParce5');

    let outTotal = document.querySelector('.outTotal');
    let outParcelas = document.querySelector('.outParcelas');
    let outParValor = document.querySelector('.outParValor');

    let outTotal2 = document.querySelector('.outTotal2');
    let outParcelas2 = document.querySelector('.outParcelas2');
    let outParValor2 = document.querySelector('.outParValor2');

    let outTotal3 = document.querySelector('.outTotal3');
    let outParcelas3 = document.querySelector('.outParcelas3');
    let outParValor3 = document.querySelector('.outParValor3');

    let outTotal4 = document.querySelector('.outTotal4');
    let outParcelas4 = document.querySelector('.outParcelas4');
    let outParValor4 = document.querySelector('.outParValor4');

    let outTotal5 = document.querySelector('.outTotal5');
    let outParcelas5 = document.querySelector('.outParcelas5');
    let outParValor5 = document.querySelector('.outParValor5');

    let valor = Number(inValor.value);

    if(valor == "" || isNaN(valor)) {
        alert("Por favor, digite um valor válido!!!");
        inValor.focus();
        return;
    }

    let total = valor + (valor * 0.1) / 1;
    let total2 = valor + (valor * 0.2);
    let total3 = valor + (valor * 0.3);
    let total4 = valor + (valor * 0.4);
    let total5 = valor + (valor * 0.5);


    outTotal.textContent = `R$${total.toFixed(2)}`;
    outParcelas.textContent = `1X`;
    outParValor.textContent = `R$${total.toFixed(2)}`;

    outTotal2.textContent = `R$${total2.toFixed(2)}`;
    outParcelas2.textContent = `2X`;
    outParValor2.textContent = `R$${(total2 / 2).toFixed(2)}`;

    outTotal3.textContent = `R$${total3.toFixed(2)}`;
    outParcelas3.textContent = `3X`;
    outParValor3.textContent = `R$${(total2 / 3).toFixed(2)}`;

    outTotal4.textContent = `R$${total4.toFixed(2)}`;
    outParcelas4.textContent = `4X`;
    outParValor4.textContent = `R$${(total4 / 4).toFixed(2)}`;

    outTotal5.textContent = `R$${total5.toFixed(2)}`;
    outParcelas5.textContent = `5X`;
    outParValor5.textContent = `R$${(total5 / 5).toFixed(2)}`;
    
}

let btnSimular = document.querySelector('#btnSimular');
btnSimular.addEventListener("click", contadorParcelas);
