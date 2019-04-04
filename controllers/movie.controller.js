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

// Get a movie detail
exports.movieDetail = (req, res) => {
    Movie.findById(req.params.id, (err, movie) => {
        if(err){
            res.status(500).send(err);
        }
        res.render('../views/update', {
            movies: movie
        });
    });
};

// Update a movie
exports.movieUpdate = (req, res) => {
    Movie.findOneAndUpdate(
        {
            _id: req.params.id
        },
        req.body,
        {
            new: true
        }, (err, movie) => {
            if(err) {
                res.status(500).send(err);
            }
            res.redirect('/')
        }
    )
};

// Delete a movie
exports.movieDelete = function (req, res) {
    Movie.findByIdAndRemove(req.params.id, function (err) {
        if(err) {
            return next(err);
        }
        res.redirect('/');
    })
};