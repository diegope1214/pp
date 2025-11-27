function validarCodigo() {
    const input = document.getElementById('codigoInput').value;
    const mensaje = document.getElementById('mensaje');

    if (input === 'XXVVIIXXV') {
        mensaje.textContent = 'T2(1,66,54) – T3(5) – T2(69,20)';
        mensaje.style.color = 'green';
    } else {
        mensaje.textContent = 'Código incorrecto';
        mensaje.style.color = 'red';
    }
}
