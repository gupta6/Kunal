const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
passport.use(new GoogleStrategy({
clientID:'395814826294-262ro5c3f8qo12mm97istrf6897hh8ii.apps.googleusercontent.com',
clientSecret:'lYJkGrIVoFap3_s5NN7E1axM',
callbackURL:'/welcome'
},(accessToken,refreshToken,profile,done)=>{
    // console.log("Passport Google Call Back Function.... AccessToken "+accessToken+" Ref "+refreshToken+" Profile ",profile,"Done ",done);
    console.log("Call to DB  to store data");
    return done(null,{token:accessToken,profile:profile})  ; // null represent no error
}));
 passport.serializeUser((user,done)=>{
    done(null,user.id);
});
passport.deserializeUser((user,done)=>{
    done(null,{profile:profile,t})
});