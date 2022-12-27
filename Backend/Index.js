require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || "4000";

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

const server = require("http").createServer(app);

const io = require("socket.io")(server);

io.on("connection", () => {
  console.log("connection to socket");
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
