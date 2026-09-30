function verificarCuotas() {
    let cuotas = Number(document.querySelector('#cuotas').value);

    if (cuotas >= 6) {
        document.querySelector('#resultado').innerHTML = 
            'Serán aplicados intereses en esta compra';
    } else {
        document.querySelector('#resultado').innerHTML = 
            'No serán aplicados intereses en esta compra';
    }
}