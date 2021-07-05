const passport = require("passport");
const localStrategy = require("passport-local").Strategy;

const User = require('../model/user');

passport.use(new localStrategy({
    username:'email'
},
function(email1,password1,done){
    // search for a user and estb. his identity
    User.findOne({email:email1},function(er,user){
        if(er) console.log("error in finding user in passport");
        return done(er);    //  similar to next() used by colt steele 
        if(!user || user.password!=password1){
            console.log("Wrong username or password");
            return done(null,false);    //  null-> since there's no error
            //  false -> since user NOT found
        }
        return done(null,user);
    });
}
))

// serializing by storing id in cookies
passport.serializeUser(function (user,done){
    done(nul,user._id);    
});

// desirealizing user from key
passport.deserializeUser(function(id,done){
    User.findById(id,function(er,user){
        if(er){
            console.log("Error in finding user");
            return done(er);
        }
        return done(null,user);
    });
});

module.exports=passport;