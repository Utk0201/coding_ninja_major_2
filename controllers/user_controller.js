const User = require('../model/user');
//  sign up page
module.exports.signUp = function(req,res){
    return res.render('sign_up',{
        title:"Sign up!!!"
    });
};

//  sign in page
module.exports.signIn = function(req,res){
    return res.render('sign_in',{
        title:"Sign in!!!"
    });
};

//  post sign up
module.exports.create = function(req,res){
    // if(req.body.password!=req.body.confirm_password){
    //     return res.redirect('back');
    // }
    User.findOne({email:req.body.email},function(er,user){
        if(er){
            console.log('error in finding this user');
        }
        if(!user){
            User.create(req.body,function(er,user){
                if(er){console.log("Error in creating user");return}
                return res.redirect('/user/sign-in');
            })
        }
        else{
            return res.redirect('back');
        }
    })
}
//  post sign in
module.exports.login = function(req,res){
    
}