var express = require('express');
var router = express.Router();
var movieController = require('../controllers/movie.controller')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'ExpressJS and Swig' });
// });

router.get('/', movieController.listAllMovies);
router.get('/add', movieController.addMovie);
router.post('/create', movieController.createMovie);

module.exports = router;
