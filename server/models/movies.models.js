const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {
        type:String
    },
    genre: {
        type:String, 
        enum: ['Drama', 'Fantasy', 'Action']
    },
    rating:{
        type:String,
        enum: ['rate1', 'rate2', 'rate3']
    },
    image: {
        type: String,
    }

}, {timestamps:true})

module.exports = mongoose.model('Movie', MovieSchema)