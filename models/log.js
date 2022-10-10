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
    comment: [commentSchema],
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
    }
})

const Log = model('Log', LogSchema)

module.exports = Log