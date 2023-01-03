const express = require("express");
const mongoose = require("mongoose");
const app = express();
const http = require("http").Server(app);
const { json } = require("react-router-dom");
const cors = require("cors");
const Commentroutes = require("./routes/commentRoute");
const socketIO = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:5173",
  },
});

mongoose
  .connect(
    "mongodb+srv://eunice:mongo-password@cluster0.vd5slx3.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());
app.use(cors());
socketIO.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
  });
});

// respond with "hello world" when a GET request is made to the homepage
// app.get('/newa', (req, res) => {
//   res.send('hello world')
// })
app.use("/comment", Commentroutes);

console.log("salut Eunice");

// app.set( process.env.PORT || 3000)

http.listen(process.env.PORT || 3000, () =>
  console.log("le serveur a demarré")
);
