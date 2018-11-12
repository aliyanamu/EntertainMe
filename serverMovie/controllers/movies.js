const Movie = require('../models/movies')

module.exports = {
  list: (req, res) => {
    Movie.find( (err, data) => {
      if (!err) {
        res.status(200).json({
          data: data
        })
      } else {
        res.status(500).json({
          message: err.message
        })
      }
    })
  },

  insert: (req, res) => {
    Movie.create({
      poster_path: req.body.poster_path,
      popularity: req.body.popularity,
      overview: req.body.overview,
      title: req.body.title,
      tag: req.body.tag
    }, function (err) {
      if (!err) {
        res.status(200).json({
          message: `succesfully added data: ${req.body.title}`
        })
      } else {
        res.status(500).json({
          message: err.message
        })
      }
    })
  },

  update: (req, res) => {  
    const upd = {
      poster_path: req.body.poster_path,
      popularity: req.body.popularity,
      overview: req.body.overview,
      title: req.body.title,
      tag: req.body.tag
    }

    Movie.updateOne({
      _id: req.params.id
    }, upd, function(err) {
      if (!err) {
        res.status(200).json({
          message: `succesfully updated movies: ${req.body.title}`
        })
      } else {
        res.status(500).json({
          message: err.message
        })
      }
    })
  },

  remove: (req, res) => {
    Movie.deleteOne({
      _id: req.params.id
    }, function(err) {
      if (!err) {
        res.status(200).json({
          message: `succesfully deleted movies`
        })
      } else {
        res.status(500).json({
          message: err.message
        })
      }
    })
  }
}