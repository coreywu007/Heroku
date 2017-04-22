var express = require('express')
var app = express()

var PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/byeworld', function (req, res) {
  res.send('Bye')
})

app.listen(PORT, function(){
	console.log('Running')
});