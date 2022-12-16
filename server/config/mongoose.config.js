const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ourMovieDb', {
    useNewUrlParser: true,
    useUnifiedTopology:true
})
.then(() => {
    console.log('THe server has been connectedd to the database')
})
.catch((err) => {
    console.log('There was somekind of an error when connecting to the database', err)
})