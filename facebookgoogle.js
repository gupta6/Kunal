const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
passport.use(new FacebookStrategy({
    clientID:'430382240802706',
    clientSecret:'c41ac30d52036989a94196d6feef71fc',
    callbackURL:'/callback'
    },(accessToken,refreshToken,profile,done)=>{
        // console.log("Passport Facebook Call Back Function.... AccessToken "+accessToken+" Ref "+refreshToken+" Profile ",profile,"Done ",done);
        console.log("Call to DB  to store data");
        return done(null,{token:accessToken,profile:profile})  ; // null represent no error
    }));

    passport.serializeUser((user,done)=>{
        done(null,user.id);
    });
    passport.deserializeUser((user,done)=>{
        done(null,{profile:profile,t})
    });