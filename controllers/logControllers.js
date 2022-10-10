// Import Dependencies
const express = require('express')
const { default: axios } = require('axios')
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
	Log.find({})
		.then(log => {
			const username = req.session.username
			const loggedIn = req.session.loggedIn
			
			res.render('logs/index', { examples, username, loggedIn })
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})

// index that shows only the user's examples
router.get('/mine', (req, res) => {
    // destructure user info from req.session
    const { username, userId, loggedIn } = req.session
	Log.find({ owner: userId })
		.then(examples => {
			res.render('logs/index', { examples, username, loggedIn })
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})

// new route -> GET route that renders our page with the form
router.get('/new', (req, res) => {

	const { username, userId, loggedIn } = req.session
	res.render('logs/new', { username, loggedIn })

})

////////////////////////////////////////////////
// create a seperate route for my search??? use result.liquid to show
// axios returns the result into variable with info
////////////////////////////////////////////////////

// create -> POST route that actually calls the db and makes a new document
// post the log with the comment
router.post('/', (req, res) => {


	req.body.owner = req.session.userId
	Log.create(req.body)
		.then(log => {
			// axios('http://www.omdbapi.com/?apikey=764389f4&i=tt0114708')
			console.log('this was returned from create', log)
			res.redirect('/logs/')
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})

// edit route -> GET that takes us to the edit form view
router.get('/:id/edit', (req, res) => {
	// we need to get the id
	const exampleId = req.params.id
	Log.findById(exampleId)
		.then(example => {
			res.render('logs/edit', { example })
		})
		.catch((error) => {
			res.redirect(`/error?error=${error}`)
		})
})

// update route
router.put('/:id', (req, res) => {
	const exampleId = req.params.id
	req.body.ready = req.body.ready === 'on' ? true : false

	Log.findByIdAndUpdate(exampleId, req.body, { new: true })
		.then(example => {
			res.redirect(`/logs/${log.id}`)
		})
		.catch((error) => {
			res.redirect(`/error?error=${error}`)
		})
})

// show route
router.get('/:id', (req, res) => {
	const exampleId = req.params.id
	Example.findById(exampleId)
		.then(example => {
            const {username, loggedIn, userId} = req.session
			res.render('logs/show', { example, username, loggedIn, userId })
		})
		.catch((error) => {
			res.redirect(`/error?error=${error}`)
		})
})

// delete route
router.delete('/:id', (req, res) => {
	const exampleId = req.params.id
	Log.findByIdAndRemove(exampleId)
		.then(example => {
			res.redirect('/logs')
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})

// Export the Router
module.exports = router
