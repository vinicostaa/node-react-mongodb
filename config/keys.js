//keys.js - figure out what set of credentials to return
if (process.env.PORT === "production") {
    
    module.exports = require('./dev');
} else {
    module.exports = require('./dev');
}
