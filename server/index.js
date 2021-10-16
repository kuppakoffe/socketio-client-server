const logger = require('./logger').logger
const  {Server} = require('socket.io')
const crypto = require('crypto')

const io = new Server()

const socketMap = {}


const addToMap = (socket) => {
    const {id} = socket;
    const hash = crypto.createHash('md5').update(id).digest("hex");
    socket.join(hash)
    socketMap[hash] = id;
    io.to(hash).emit(`connected to rooom ${hash}`)
    console.log({socketMap})
}


io.on('connection', (socket) =>{
    socket.on("join", (id)=>{
        console.log(id)
        socket.join(id);
        io.sockets.in(id).emit("response", `this is for id: ${id}`)
    })


    socket.on("data", id=>{
        console.log("from id ", id)
        io.sockets.in(id).emit("response ", `data recv from ${id}`)
    })
})

io.listen(3333)