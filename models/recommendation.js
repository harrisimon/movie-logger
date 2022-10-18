/////////////////////////////
/////// Schema for reccomendation

////////////////////IMPORTS//////////////////
const mongoose = require('./connection') // unused model for future version in main branch ! 


const {Schema, model} = mongoose

const genreSchema = new Schema({// if our schema here isn't going to be used only in this file it should become it's own and imported
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

const Rec = model('Log', RecSchema) //! we have 2 exports that use the 'Log' as a reference string(see log.js)

module.exports = Rec