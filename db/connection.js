const mongoose = require('mongoose');
const config = require('./config');
mongoose.connect(config.url);
console.log("connection done...");
module.exports = mongoose;
