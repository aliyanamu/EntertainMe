const redis = require('redis'),
      client = redis.createClient()

client.on('connect', function() {
  console.log('Redis client connected')
})

//Incase any error pops up, log it
client.on("error", function(err) {
  console.log("Error " + err)
})

module.exports = client
