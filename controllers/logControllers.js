// Import Dependencies
const express = require('express')
const axios = require('axios')
const Log = require('../models/log')

// Create router
const router = express.Router()

// Router Middleware
// Authorization middleware
// If you have some resources that should be accessible to everyone regardless of loggedIn status, this middleware can be moved, commented out, or deleted. 
///////////////////////////////////
/// decide on whether to use this
////////////////////////////////
router.use((req, res, next) => {
	// checking the loggedIn boolean of our session
	if (req.session.loggedIn) {
		// if they're logged in, go to the next thing(thats the controller)
		next()
	} else {
		// if they're not logged in, send them to the login page
		res.redirect('/auth/login')
	}
})

// Routes

// index ALL
router.get('/', (req, res) => {
	//////////////////////////////////////////////
	// add axios to find movie data
	Log.find({})
		.then(logs => {
			const username = req.session.username
			const loggedIn = req.session.loggedIn
			
			res.render('logs/index', { logs, username, loggedIn })
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})

// index that shows only the user's logs
router.get('/mine', (req, res) => {
    // destructure user info from req.session
    const { username, userId, loggedIn } = req.session
	//////////////////////////////////////////////
	// add axios to find movie data
	// axios(`http://www.omdbapi.com/?apikey=764389f4&i=${log.imdbId}`)
	Log.find({ owner: userId })
		.then(logs => {
			res.render('logs/index', { logs, username, loggedIn })
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})

// new route -> GET route that renders our page with the form
router.get('/new', (req, res) => {
	// axios('http://www.omdbapi.com/?apikey=764389f4&i=tt0114709')
	// .then(result => {
	// 	console.log(result.data)
	// 	// res.json(result)
	// })
	const { username, userId, loggedIn } = req.session
	res.render('logs/new', { username, loggedIn })

})

////////////////////////////////////////////////
// create a seperate route for my search??? use result.liquid to show
// axios returns the result into variable with info
////////////////////////////////////////////////////

router.post('/new/result', (req, res) => {
	const searchTitle = req.body.title
	// console.log("here",search)
	const { username, userId, loggedIn } = req.session
	// console.log(req.body)
	// how to deal with API key??
	// const movie ={}
	
	axios(`http://www.omdbapi.com/?apikey=764389f4&t=${searchTitle}`)
	.then(result => {
		const movieTitle = result.data.Title
		const movieYear = result.data.Year
		const movieRuntime = result.data.Runtime
		const movieDirector = result.data.Director
		const moviePlot = result.data.Plot
		const movieGenre = result.data.Genre
		const movieImdbId = result.data.imdbID
		const moviePoster = result.data.Poster

		const movie = {
			title: movieTitle,
			year: movieYear,
			runtime: movieRuntime,
			director: movieDirector,
			plot: moviePlot,
			genre: movieGenre,
			imdbId: movieImdbId,
			poster: moviePoster
		}
		// console.log(movie.poster)
		res.render('logs/new', {movie: movie, username, loggedIn})
		// return movie
	})
	// res.json(result.Title)
	// re render or redirect with search results
	// res.json({})

})

// create -> POST route that actually calls the db and makes a new document
// post the log with the comment
router.post('/', (req, res) => {
	// console.log("here", req.body)
	req.body.owner = req.session.userId

	Log.create(req.body)
		.then(log => {
			const logText = req.body.logText

			const comment = {
				note: logText,
				author: req.body.owner
			}
			log.comment.push(comment)
			console.log("look here",log)
			log.save()
			console.log('this was returned from create', log)
			res.redirect('/logs/new')
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})


// edit route -> GET that takes us to the edit form view
router.get('/:id/edit', (req, res) => {

	const logId = req.params.id
	Log.findById(logId)
		.then(log => {
			console.log("here",log.comment[0])
			// const logText = req.body.logText

			// const comment = {
			// 	note: logText,
			// 	author: req.body.owner
			// }
			// log.comment.push(comment)
			// console.log("look here",log)
			// log.save()
			res.render('logs/edit', { log })
		})
		.catch((error) => {
			res.redirect(`/error?error=${error}`)
		})
})



// update route
router.put('/:id', (req, res) => {
	const logId = req.params.id
		const logText = req.body.logText

		const updateComment = {
			note: logText,
			author: req.body.owner
		}

	Log.findById(logId, req.body)
		.then(log => {
			log.comment.splice(0,1,updateComment)
			log.save()
			console.log("here")
			return log.updateOne(req.body)
		})
		.then(()=> {
			res.redirect(`/logs/${log.id}`)
		})
		.catch((error) => {
			res.redirect(`/error?error=${error}`)
		})
})

// show route
router.get('/:id', (req, res) => {
	const logId = req.params.id
	//////////////////////////////////////////////
	// add axios to find movie data
	Log.findById(logId)
		.then(log => {
            const {username, loggedIn, userId} = req.session
			console.log(log)
			res.render('logs/show', { log, username, loggedIn, userId })
		})
		.catch((error) => {
			res.redirect(`/error?error=${error}`)
		})
})

// delete route
router.delete('/:id', (req, res) => {
	const logId = req.params.id
	Log.findByIdAndRemove(logId)
		.then(log => {
			res.redirect('/logs/mine')
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})

// Export the Router
module.exports = router
