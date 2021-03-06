const logger = require('./logger').logger
const  {Server} = require('socket.io')


const io = new Server()



io.on('connection', (socket) =>{
    socket.on("join", (id)=>{
        logger.info(`Joining room ${id}`)
        socket.join(id);
        io.sockets.in(id).emit("response", `this is for id: ${id}`)
    })


    socket.on("data", data=>{
        console.log(data)
        
    })
})

const PORT = process.env.PORT||3333;
logger.info(`Server listening on port ${PORT}`)
io.listen(PORT)