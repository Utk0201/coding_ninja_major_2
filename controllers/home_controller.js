
module.exports.home=function(req,res){
    console.log(req.cookies);
    res.render('home.ejs',{title:"Utkarsh Kumar"});
}
module.exports.profile=function(req,res){
    res.render('user_profile.ejs',{title:"Utkarsh Kumar"});
}