const {createServer} = require("http");
const app = reuire("./app");
const {Server} = reuqire("socket.io");
require("dotenv").config();

const httpServer = createServer(app);

const io = new Server(httpServer,{
    cors:{
        origin:"http://localhost:3000",
    },
});

require("./utils/io")(io);

httpServer.listen(process.env.PORT,()=>{
    console.log("Server listening on port", process.env.PORT);
});