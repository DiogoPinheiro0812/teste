require('dotenv').config(); // read environment variables from .env file
const cors = require('cors');       // middleware to enable CORS (Cross-Origin Resource Sharing)
const express = require('express');
const app = express();

app.use(cors()); //enable ALL CORS requests (client requests from other domain)

app.use(express.json()); //enable parsing JSON body data

app.use('/utilizadores', require('./Server/routes/users.routes'))
app.use('/reviews', require('./Server/routes/reviews.routes'))
app.use('/receitas', require('./Server/routes/receitas.routes'))
app.use('/ingredientes', require('./Server/routes/ingredientes.routes'))

app.listen(process.env.PORT, () => 
   console.log(`Server running at http://${process.env.HOST}:${process.env.PORT}/`)
);

module.exports= app