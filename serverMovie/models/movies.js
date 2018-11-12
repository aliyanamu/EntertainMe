const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const movieScheme = new Schema({
    poster_path: String,
    popularity: Number,
    overview: String,
    title: String,
    tag: [{
      type: String
    }]
});

const Movie = mongoose.model('Movie', movieScheme)
module.exports = Movie