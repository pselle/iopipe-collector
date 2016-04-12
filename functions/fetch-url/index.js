var iopipe = require("iopipe")()

exports.handle = function(event, context) {
  iopipe.define(
    event.url,
    (event, callback) => {
      callback(context.succeed(event))
    }
  )(event)
}
