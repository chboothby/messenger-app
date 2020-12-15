const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

// const cors = require("cors");
// app.use(cors());

io.on("connection", (socket) => {
  console.log("connected");
  socket.on("message", ({ name, message }) => {
    io.emit("message", { name, message });
  });
});

http.listen(3000, function () {
  console.log("listening on port 3000");
});
