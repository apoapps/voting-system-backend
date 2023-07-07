import app from "./app";
import { Server as WebSocketServer } from "socket.io";
import http from "http";
import { connectDB } from "./db";
import sockets from "./sockets";

//Iniciar Base de datos
connectDB();

//Configuracion de websockets
//Crear Server
const server = http.createServer(app);
//
const httpServer = server.listen(3000);
//Conección con los clientes de Sockets
const io = new WebSocketServer(httpServer);

//Sockets
sockets(io);

console.log("server running on port 3000");
