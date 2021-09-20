const express = require('express'); 
const app = express();  
const path = require('path')
const SOCKETIO = require("socket.io");
var usuarios = [];



//settings
app.set('port', process.env.PORT || 4000);
app.use(express.static(path.join(__dirname, 'public')));

//Starts the server
const server = app.listen(app.get('port'), () => {
    console.log('Servidor inicializado en puerto', app.get('port'))
})

const io = SOCKETIO(server);

io.on('connection', (socket) => {

    socket.on('singUp', (data) => {
        usuarios.push(data.user);
        app.set('port', process.env.PORT || 4000);
        app.use(express.static(path.join(__dirname, 'chatModules')));  
    });

      
});