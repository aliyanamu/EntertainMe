const Tv = require('../models/televisions')

module.exports = {

  list: (req, res) => {
    Tv.find( (err, data) => {
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
    Tv.create({
      poster_path: req.body.poster_path,
      popularity: req.body.popularity,
      overview: req.body.overview,
      title: req.body.title,
      tag: req.body.tag
    }, function (err) {
      if (!err) {
        res.status(200).json({
          message: `succesfully added series: ${req.body.title}`
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

    Tv.updateOne({
      _id: req.params.id
    }, upd, function(err) {
      if (!err) {
        res.status(200).json({
          message: `succesfully updated series: ${req.body.title}`
        })
      } else {
        res.status(500).json({
          message: err.message
        })
      }
    })
  },

  remove: (req, res) => {
    Tv.deleteOne({
      _id: req.params.id
    }, function(err) {
      if (!err) {
        res.status(200).json({
          message: `succesfully deleted series`
        })
      } else {
        res.status(500).json({
          message: err.message
        })
      }
    })
  }
}