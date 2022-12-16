const express = require('express');
const cors = require('cors');
const app = express();

require('./config/mongoose.config');

app.use(cors(), express.json(), express.urlencoded({extended:true}))

const PORT = 8000;

require('./routes/movie.routes')(app);

app.listen(PORT, function () {
    console.log(`The server has started in PORT: ${PORT}`)
})