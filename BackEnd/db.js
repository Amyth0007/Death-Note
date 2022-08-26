const mongoose = require('mongoose');
const mongoURI ="mongodb://localhost:27017/"
// const mongoURI ="mongodb+srv://amit:amit@cluster0.9sryl.mongodb.net/death_note"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI , ()=>{
        console.log("connected to mongo succesfully");
    })
}

module.exports = connectToMongo;