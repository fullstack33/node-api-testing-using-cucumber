const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/testingDatabase";

const db = () => {
    mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(()=> console.log("Database Connected ...!!!"))
    .catch(err => console.log("Error Occure", err))
}

module.exports = db;