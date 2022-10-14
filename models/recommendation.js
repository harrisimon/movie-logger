/////////////////////////////
/////// Schema for reccomendation

////////////////////IMPORTS//////////////////
const mongoose = require('./connection')
const User = require('./user')
const commentSchema = require('./comment')

const {Schema, model} = mongoose

const RecSchema = new Schema({

    movieTitle: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    



})
