const express = require('express')
const mongoose = require('mongoose');
const Comment = require('./models/CommentModel');

mongoose.connect('mongodb+srv://eunice:mongo-password@cluster0.vd5slx3.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express()

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/newa', (req, res) => {
  res.send('hello world')
})

console.log("salut Eunice");

// app.set( process.env.PORT || 3000)

app.listen( process.env.PORT || 3000, ()=>console.log("le serveur a demarré"));
