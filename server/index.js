const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection", (socket) => {
  socket.on("chat message", ({ user, msg }) => {
    io.emit("chat message", { user, msg });
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
