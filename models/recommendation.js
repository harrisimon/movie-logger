/////////////////////////////
/////// Schema for reccomendation

////////////////////IMPORTS//////////////////
const mongoose = require('./connection')


const {Schema, model} = mongoose

const genreSchema = new Schema({
    type:String,
    required: false
})

const RecSchema = new Schema({

    Title: {
        type: String,
        required: true
    },
    releaseDate: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
 
    },
    runtime: {
        type: Number,
        required: false
    }

})

const Rec = model('Log', RecSchema)

module.exports = Rec