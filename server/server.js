'use strict'

var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var twilioClient = require('./twilio');

app.use('/', express.static(__dirname + '/../public'));
app.use(bodyParser.json());

app.post('/send-text/:to', function(req, res){
	var to = req.params.to;
	var message = req.body.message;

	twilioClient.send(to, message, function(err, message){
		if(err){
			console.log("twilio err:", err)
			res.send(400);
		} else {
			console.log("twilio sucess:", message)
		}
	})
	console.log({to: to, message: message});
	res.send();
})


var port = 3000
app.listen(port, function () {
  console.log('Server listening at http://localhost:' + port)
})
