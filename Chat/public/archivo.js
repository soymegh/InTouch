const socket = io(); 
var txtUsername = document.getElementById('txtUsuario');
var boton = document.getElementById('btnSend');



boton.addEventListener('click', () => {
    socket.emit('singUp', {
        user: txtUsername.value
    });

    txtUsername.value = ""; 
});
