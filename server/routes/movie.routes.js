const MovieController = require('../controllers/movie.controller');

module.exports = (app) => {
    app.get('/api/movie', MovieController.findAllMovies)
    app.get('/api/movie/:id', MovieController.findOneMovie)
    app.post('/api/movie', MovieController.createMovie)
    app.put('/api/movie/:id', MovieController.updateMovie)
    app.delete('/api/movie/:id', MovieController.deleteMovie)
}