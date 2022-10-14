/////////////////////////////
/////// add dependencies
// Import Dependencies
const express = require('express')
const axios = require('axios')
const Rec = require('../models/recommendation')


// Create router
const router = express.Router()



/////////////////////////////
/////// add routes for getting recommendation
// based on genre
/// look through db and random array

// based on year
/// look through db and random array

router.get('/recommendations', (req, res) => {
    Rec.find({})
        .then(rec => {
            console.log(rec)
        })
})



/////////////////////////////
/////// add routes for adding reccommendation to logs

//// search using title to bring up form simlar to 





// Export the Router
module.exports = router