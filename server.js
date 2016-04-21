var iopipe = require('iopipe')()
var jwt = require('express-jwt');
var express = require('express')
var app = express()

var bodyParser = require('body-parser');
app.use(bodyParser.json());

config = {
  listen_port: process.env.LISTEN_PORT || 80,
  logstash_url: process.env.LOGSTASH_URL || "https://localhost/"
}

app.get('/', function(req, res) {
  res.send("IOpipe Collector API/1.0")
})

app.post('/event',
  (req, res) => {
    iopipe.define(
      (request, callback) => {
        callback({
          timestamp: Date.now(),
          payload: request.body
        })
      },
      config.logstash_url,
      (e, c) => {
        res.send(200)
        console.log("Writing to logstash: " + JSON.stringify(e))
        c(e)
      }
    )(req)
  }
)

app.listen(config.listen_port)
