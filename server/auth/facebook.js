require('dotenv').config()
const passport = require('koa-passport')
const FacebookStrategy = require('passport-facebook').Strategy

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL
},
function (accessToken, refreshToken, profile, cb) {
    console.log('[FacebookStrategy]accessToken:', accessToken)
    console.log('[FacebookStrategy]refreshToken:', refreshToken)
    console.log('[FacebookStrategy]profile:', profile)
    console.log('[FacebookStrategy]cb:', cb)
    return cb(null, profile)
}
));

passport.serializeUser((user, done) => {
    done(null, user);
  });
  
  passport.deserializeUser((user, done) => {
    done(null, user);
  });  

module.exports = passport;
