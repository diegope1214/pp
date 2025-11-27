function validarCodigo() {
    const input = document.getElementById('codigoInput').value;
    const mensaje = document.getElementById('mensaje');

    if (input === 'XXVVIIXXV') {
        mensaje.textContent = '02(1,66,54) – 22(5) – 02(69,20)';
        mensaje.style.color = 'green';
    } else {
        mensaje.textContent = 'Código incorrecto';
        mensaje.style.color = 'red';
    }
}
