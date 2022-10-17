// dependencies
////////////////////////////////////////
const express = require("express")
const Log = require("../models/log")

/////////////////////////////////////////
// Create Router
/////////////////////////////////////////
const router = express.Router()

/////////////////////////////////////////////
// Routes
////////////////////////////////////////////
// POST
router.post("/:logId", (req, res) => {
    const logId = req.params.logId

    if (req.session.loggedIn) {
        req.body.author = req.session.userId
    } else {
        res.sendStatus(401)
    }

    Log.findById(logId)

        .then(log => {
            console.log("here",req.body)
            log.comments.push(req.body)
            return log.save()
        })
        .then(log => {
            res.redirect(`/logs/${log.id}`)
        })
        .catch(err => res.redirect(`/error?error=${err}`))
})


// DELETE
// only the author of the comment can delete it
router.delete('/delete/:logId/:commId', (req, res) => {
    // isolate the ids and save to vars for easy ref
    const logId = req.params.logId 
    const commId = req.params.commId
    // get the fruit
    Log.findById(logId)
        .then(log => {
            // get the comment
            // subdocs have a built in method that you can use to access specific subdocuments when you need to.
            // this built in method is called .id()
            const comment = log.comments.id(commId)
            console.log('this is the comment that was found', comment)
            // make sure the user is logged in
            if (req.session.loggedIn) {
                // only let the author of the comment delete it
                if (comment.author == req.session.userId) {
                    comment.remove()
                    log.save()
                    res.redirect(`/logs/${log.id}`)
                } else {
                    const err = 'you%20are%20not%20authorized%20for%20this%20action'
                    res.redirect(`/error?error=${err}`)
                }
            } else {
                const err = 'you%20are%20not%20authorized%20for%20this%20action'
                res.redirect(`/error?error=${err}`)
            }
        })
        // send an error if error
        .catch(err => res.redirect(`/error?error=${err}`))

})

module.exports = router