const request = require('request')

request({
  url: 'http://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadephia',
  json: true
}, (err, response, body) => {
  console.log(JSON.stringify(body.results[0].geometry.location['lat'], undefined, 2));
  console.log(JSON.stringify(body.results[0].geometry.location['lng'], undefined, 2));
})
