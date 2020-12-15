const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

// const cors = require("cors");
// app.use(cors());

io.on("connection", (socket) => {
  socket.on("message", (data) => {
    console.log(data);
  });
});

http.listen(3000, function () {
  console.log("listening on port 3000");
});
