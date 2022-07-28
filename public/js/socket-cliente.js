const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar =document.querySelector('#btnEnviar');


const socket = io();

//on para escuchar un evento
socket.on('connect', () =>{
    //console.log('Conectado');

    //muestra solo el conectado y oculta el desconectado.
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';

});
socket.on('disconnect', () =>{
    //console.log('Desconectado del servidor');

    lblOffline.style.display = '';
    lblOnline.style.display = 'none';
});

socket.on('enviar-mensaje', (payload)=> {
    console.log(payload);
})

btnEnviar.addEventListener('click', () =>{

    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '123ABC',
        fecha: new Date().getTime()
    }
    //emitir evento
    socket.emit('enviar-mensaje', payload, (id) =>{
        console.log('Desde el server', id);

    });
})