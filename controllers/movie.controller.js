var path = require('path')
const Movie = require('../models/movie.model');

// exports.home = (req, res) => {
//     res.render('../views/index');
// };

// Add a movie
exports.addMovie = (req, res) => {
    res.render('../views/add');
}

exports.createMovie = (req, res) => {
    let movie = new Movie ({
        title: req.body.title,
        year: req.body.year
    });

    movie.save (function (err) {
        if(err) {
            return next(err);
        }
        console.log('Movie added succesfully.')
        res.redirect('/');
    });
}

// List all movies
exports.listAllMovies = (req, res, next) => {
    Movie.find({}, (err, movie) => {
        if(err){
            res.status(500).send(err);
        }
        console.log(movie);
        res.render('../views/index', {
            movies: movie
        });
    });
};

// // Get a movie details
// exports.movieDetails = function (req, res) {
//     Movie.findById(req.params.id, function(err, movie) {
//         if(err) {
//             return next(err);
//         }
//         res.send(movie);
//     })
// };

// // Update a movie details
// exports.movieUpdate = function (req, res) {
//     Movie.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, movie) {
//         if(err) {
//             return next(err);
//         }
//         res.send('Movie updated.');
//     });
// };

// // Delete a movie
// exports.movieDelete = function (req, res) {
//     Movie.findByIdAndRemove(req.params.id, function (err) {
//         if(err) {
//             return next(err);
//         }
//         res.send('Movie deleted successfully.');
//     })
// };