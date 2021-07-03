const User = require('../model/user');

//  render profile page
module.exports.profile = function(req,res){
    // console.log(req.cookies.user_id);
    if(!req.cookies) return res.redirect('/user/sign-up');
    var userId = req.cookies.user_id;
    User.findOne({_id:userId},function(er,user){
        if(er){
            console.log("error in finding user with given id");
            res.redirect('back');
        }
        //  user not found
        if(!user){
            res.redirect('/user/sign-in');
        }
        else{
            res.render('user_profile',{user});
        }
    });    
}

//  render sign up page
module.exports.signUp = function(req,res){
    return res.render('sign_up',{
        title:"Sign up!!!"
    });
};

//  render sign in page
module.exports.signIn = function(req,res){
    res.render('sign_in');
};

//  post sign up
module.exports.create =function(req,res){
    // if(req.body.password!=req.body.confirm_password){
    //     return res.redirect('back');
    // }
    User.findOne({email:req.body.email},async function(er,user){
        if(er){
            console.log('error in finding this user');
        }
        if(!user){
            await User.create(req.body,function(er,user){
                if(er){console.log("Error in creating user");}
                console.log("Redirecting to signIn");
                res.redirect('/user/sign-in');
            });
        }
        else{
            console.log("Redirecting to signUp");
            return res.redirect('back');
        }
    })
}
//  post sign in and create session
module.exports.createSession = function(req,res){
    //  find the user
    User.findOne({email:req.body.email},function (er,user){
        if(er){console.log('error in sign in');return;}
        if(user){
            console.log("User found");
            // handle for password mismatch
            if(user.password!=req.body.password){
                console.log("Password mismatch!!!!");
                return res.redirect('back');
            }
            // handle session creation
            console.log("Id of user: ",user._id);
            res.cookie('user_id',user._id);
            return res.redirect('/user/profile');
        }
        else{
            console.log("User not found");
            // handle user not found
            return res.redirect('back');
        }
    });
}