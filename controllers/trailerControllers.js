/////////////////////////////
/////// add dependencies
// Import Dependencies
const express = require('express')
const axios = require('axios')
const Log = require('../models/log')


// Create router
const router = express.Router()



// route to look up trailer based on logId
// logId bring back imdbId which then uses the movie database API to find their id and then find trailer from their id
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

                const tmdbId = result.data.movie_results[0].id
                axios(`https://api.themoviedb.org/3/movie/${tmdbId}/videos?api_key=a0900a4fc790e96b93869d26be959346&language=en-US`)

                    .then(result => {
                        console.log(result.data.results[0].key)
                        const key = result.data.results[0].key
                        res.render('trailers/index', {key, username, loggedIn, userId})
                    })
                    .catch(error => {
                        res.redirect(`/error?error=${error}`)
                    })
            })
            .catch(error => {
                res.redirect(`/error?error=${error}`)
            })
        })
        .catch(error => {
            res.redirect(`/error?error=${error}`)
        })

        


})







// Export the Router
module.exports = router