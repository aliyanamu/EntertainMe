const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const tvScheme = new Schema({
    poster_path: String,
    popularity: String,
    overview: String,
    title: String,
    tag: [{
      type: String
    }]
});

const Television = mongoose.model('Television', tvScheme)
module.exports = Television