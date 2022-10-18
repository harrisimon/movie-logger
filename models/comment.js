///////////////////////////////////////////////////////////
// Import Dependencies
///////////////////////////////////////////////////////////
const mongoose = require('./connection')

const { Schema } = mongoose

// comment schema
const commentSchema = new Schema({ // capitalize our model schemas 
    note: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

//////////////////////////////////////////////////
// Export our schema
//////////////////////////////////////////////////
module.exports = commentSchema