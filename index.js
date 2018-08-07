const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db =require('./db/config');
const userOperations = require('./db/usercrud');
app.set('view engine','ejs');

// gmail login
const passportGoogleSt = require("./passportgoogle");  // Setup
const passport = require("passport");
app.use(passport.initialize());

app.get('/google',passport.authenticate('google',{
    scope : ['profile']
}));
app.get('/welcome',passport.authenticate('google',
{session: false}),(req,res)=>{
    res.render('welcome');
});

// fb login
const passportFacebookSt = require('./facebookgoogle');
app.get('/facebook',passport.authenticate('facebook'));

app.get('/callback',passport.authenticate('facebook',
{session: false}),(req,res)=>{
    res.render('welcome');
});

var server = app.listen(1234,()=>{
    console.log('Server start at port 1234');
});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/signup',(req,res)=>{
    console.log('signup',req.url);
    var fullname = req.body.name;
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    const regUser = require('./models/guest');
    var userObject = new regUser(fullname,username,email,password);
    userOperations.register(userObject,res,req);
    console.log('userobject',userObject);
});

app.post('/login',(req,res)=>{
    console.log('login',req.url);
    var name = req.body.uname;
    var pword = req.body.password;
    const user = require('./models/member');
    var userobject = new user(name,pword);
    userOperations.login(userobject,res,req);
    console.log('userobject',userobject);
});

