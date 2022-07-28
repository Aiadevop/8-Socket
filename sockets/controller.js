//controlador de todos los sockets

const socketController = (socket) => {
    console.log('Cliente conectado', socket.id);    

    socket.on('disconnect', () =>{
        //console.log('Cliente desconectado');
    })

    //Aqui lo emite el cliente
    socket.on('enviar-mensaje', (payload, callback)=>{     
       
        const id = '123456';
        callback(id);
        //envíalo a todos menos a mi mismo
        socket.broadcast.emit('enviar-mensaje',payload); 
        //this.io vs socket.broadcast solo se usaria con un servicio rest
    })
   

}

module.exports = {socketController}