const express = require('express');
const path = require('path');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const cookieParser = require("cookie-parser");

app.use(express.urlencoded());
app.use(cookieParser());

app.set("layout extractStyles",true);
app.set('view engine','ejs');   // set view engine to ejs
app.set('views',path.join(__dirname,'views2'));  // views2 is written to signify if any name other than 'views' is written, it becomes necessary to 
app.use(expressLayouts);
app.use(express.static('assets'));
app.use('/',require('./routes/index'));
const db = require('./config/mongoose');

app.listen(3000,()=>{
    console.log('app started at port 3000'); 
}); 


