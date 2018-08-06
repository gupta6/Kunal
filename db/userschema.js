const mongoose = require('./connection');
const userSchema = mongoose.Schema;
var user = new userSchema({fullname:String, username:String, email:String, password:String});
var User = mongoose.model("users",user);
module.exports = User;
