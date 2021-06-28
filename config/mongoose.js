const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cn_development',{ useNewUrlParser: true,useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error',console.error.bind(console,"error establishing mongo connection"));

module.exports = db;