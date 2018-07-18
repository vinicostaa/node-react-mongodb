//keys.js - figure out what set of credentials to return
if (process.env.PORT === "production") {
    module.exports = require('./prod');
    
} else {
    module.exports = require('./prod');
}
