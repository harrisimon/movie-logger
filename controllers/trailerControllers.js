/////////////////////////////
/////// add dependencies
// Import Dependencies
const express = require('express')
const axios = require('axios')
// const Rec = require('../models/recommendation')
const Log = require('../models/log')


// Create router
const router = express.Router()



/////////////////////////////
/////// add routes for getting recommendation
// based on genre
/// look through db and random array

// based on year
/// look through db and random array

router.get('/:id', (req, res) => {
    const logId = req.params.id

    if (req.session.loggedIn) {
        req.body.author = req.session.userId
    } else {
        res.sendStatus(401)
    }

    Log.findById(logId)
        .then(log => {
            const username = req.session.username
            const loggedIn = req.session.loggedIn
            const userId = req.session.userId
            const imdbId = log.imdbId

            return imdbId
        })
        .then(log => {
            const username = req.session.username
            const loggedIn = req.session.loggedIn
            const userId = req.session.userId
            axios(`https://api.themoviedb.org/3/find/${log}?api_key=a0900a4fc790e96b93869d26be959346&language=en-US&external_source=imdb_id`)
            .then(result => {
                console.log(result)
                // res.render('trailers/index', {result, username, loggedIn, userId})
                res.json(result.data.movie_results)
            })
        }

        )
    // axios(`https://api.themoviedb.org/3/find/${imdbId}?api_key=a0900a4fc790e96b93869d26be959346&language=en-US&external_source=imdb_id`)
    //     .then(
            
    //         result => {
    //             console.log(res.json(result))
                
    //         }
        
    //     )

})

// router.get('/trailers', (req, res) => {
//     const logId = req.params.id
//     Log.findById(logId)
//     /// get tmdb id through tt is imdb id
//         axios("https://api.themoviedb.org/3/find/tt5034838?api_key=a0900a4fc790e96b93869d26be959346&language=en-US&external_source=imdb_id")

//     /// get movie results[0].id
//         .then(
//             axios()
//         )
// })



/////////////////////////////
/////// add routes for adding reccommendation to logs

//// search using title to bring up form simlar to 





// Export the Router
module.exports = router