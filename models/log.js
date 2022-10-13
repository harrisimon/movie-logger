//////////////////////////////////////////////////////////////////
// Our schema and model for the fruit resource
/////////////////////////////////////////////////////////////////

/// this is the old mongoose export
// const mongoose = require("mongoose") // import mongoose
const mongoose = require('./connection')
const User = require('./user')
const commentSchema = require('./comment')

const {Schema, model} = mongoose

const LogSchema = new Schema({
    //change to user thoughts / review
    userThoughts : {
        type:String,
        required: true
    },
    dateLogged: {
        type: String,
        required: true
    },
    imdbId : {
        type: String,
        required: true
    },
    movieTitle: {
        type: String,
        required: true
    },
    releaseYear: {
        type: String,
        required: true
    },
    poster: {
        type:String,
        required: true
    },
    director: {
        type:String,
        required: true
    },
    plot: {
        type:String,
        required: true
    },
    genre: {
        type:String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    comments: [commentSchema]
}, {timestamps: true})

const Log = model('Log', LogSchema)

module.exports = Log