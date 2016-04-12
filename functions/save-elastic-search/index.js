var iopipe = require("iopipe")()
var elasticsearch = require("elasticsearch")

const ESHOST = "192.241.174.50:9200"

function elasticsearch_create(client, params) {
  return function (event, context) {
    params["body"] = event
    context(params)
  }
}

exports.handle = function(event, context) {
  var esclient = new elasticsearch.Client({
    host: ESHOST,
    log: 'trace'
  })
  iopipe.define(
    iopipe.tee(
      (e, c) => { c(console.log('processing event: %j', e)) },
      iopipe.define(
        elasticsearch_create(esclient, {
          index: 'myindex',
          type: 'mytype',
          id: '1'
        }),
        (event, callback) => {
          ctx.succeed(event)
        }
      )
    )
  )(event)
}
