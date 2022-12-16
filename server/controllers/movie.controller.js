const Movie = require('../models/movies.models');

module.exports.findAllMovies = (req, res) => {
    Movie.find({})
    .then(allMovies => {
        res.json(allMovies)
    })
    .catch((err) => {
        res.json(err)
    })
}
module.exports.findOneMovie = (req, res) => {
    Movie.findOne({_id: req.params.id})
    .then(oneMovie => {
        res.json(oneMovie)
    })
    .catch((err) => {
        res.json(err)
    })
}
module.exports.createMovie = (req, res) => {
    Movie.create(req.body)
    .then(movie => {
        res.json(movie)
    })
    .catch((err) => {
        res.json({message: "Movie is not created", err})
    })
}
module.exports.updateMovie = (req, res) => {
    Movie.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
    .then(updatedMovie => {
        res.json(updatedMovie)
    })
    .catch((err) => {
        res.json(err)
    })
}
module.exports.deleteMovie = (req, res) => {
    Movie.findOneAndDelete({_id: req.params.id})
    .then(confirmDelete => {
        res.json(confirmDelete)
    })
    .catch((err) => {
        res.json(err)
    })
}