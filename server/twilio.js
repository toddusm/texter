var accountSid = process.env.TWILIO_SID
var authToken = process.env.TWILIO_AUTH
if(!accountSid) throw new ERROR('TWILIO_SID evn v')
if(!authToken) throw new ERROR('TWILIO_AUTH evn v')
var client = require('twilio')(accountSid, authToken)

module.exports.send = function(to, message, callback){
	client.messages.create({
		from:'+18019809260',
		to: '+1' + to,
		body: message, 
	}, callback);
	};
	
	