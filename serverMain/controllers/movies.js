const client = require('../client'),
    axios = require('axios')

module.exports = {
  list: (req, res) => {
    client.get('movies', function (error, data) {
      if (error) {
        console.log(error)
        throw error
      } 
      if (data !== null) {
        console.log('GET movies data ->' + data)
        res.status(200).json({
          movies: JSON.parse(data)
        })
      } else {
        axios.get('http://localhost:3001/movies')
        .then(data => {
          client.setex('movies', 60, JSON.stringify(data.data))
          res.status(200).json({
            movies: data.data
          })
        })
        .catch(err => {
          console.log('YET movies data ->' + err.message)
          res.status(500).json({
            message: err.message
          })
        })
      }
    })
  },

  insert: (req, res) => {
    axios({
      method: 'POST',
      url: 'http://localhost:3001/movies',
      data: {
        poster_path: req.body.poster_path,
        popularity: req.body.popularity,
        overview: req.body.overview,
        title: req.body.title,
        tag: req.body.tag
      }
    })
    .then(data => {
      client.del('movies')
      res.status(200).json({
        message: data.data
      })
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      })
    })
  },

  update: (req, res) => {
    axios({
      method: 'PUT',
      url: `http://localhost:3001/movies/${req.params.id}`,
      data: {
        poster_path: req.body.poster_path,
        popularity: req.body.popularity,
        overview: req.body.overview,
        title: req.body.title,
        tag: req.body.tag
      }
    })
    .then(data => {
      client.del('movies')
      res.status(200).json({
        message: data.data
      })
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      })
    })
  },

  remove: (req, res) => {
    axios({
      method: 'DELETE',
      url: `http://localhost:3001/movies/${req.params.id}`
    })
    .then(data => {
      client.del('movies')
      res.status(200).json({
        message: data.data
      })
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      })
    })
  }
}
