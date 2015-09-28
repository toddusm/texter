'use strict'

var express = require('express')
var app = express()



var port = 3000
app.listen(port, function () {
  console.log('Server listening at http://localhost:' + port)
})
