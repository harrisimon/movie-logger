# Project 2 Proposal
## Movie Logger

### Overview 
I plan to develop a movie logger app. The app will have a search which will access 'The Open Movie Database' https://www.omdbapi.com/.
Once a user has found a movie, either by searching or suggestion they can log the movie and add a comment. Suggestions will be based off of either a random selection or subselection of movies from this dataset: https://www.kaggle.com/datasets/db55ac3dfd0098a0cf96dd542807f9253a16587ff233e06baef372bccfd09942?resource=download


### Technologies Used
* Express
* Mongoose / MongoDB
* Bootstrap
* HTML + Javascript + CSS
* Morgan
* Method Override
* BCRYPTjs
* Axios

### User Stories
As a user I want to be able to...
* sign up with a username and password
* log in with the username and password
* log out
* search for a movie by title
* read a plot synopsis for a movie
* see a movie suggestion based on runtime
* see a movie suggestion based on genre
* see a movie suggestion based on release day, eg today's movie
* see a random movie suggestion
* log a movie I watched
* remove a log from a movie I watched
* add comments to a movie I watched

### Entity Relationship Diagrams
![ERD Diagram](/Movie%20logger%20ERD.drawio.png "erd diagram")

### Wireframes
![screen1](/movie%20logger/movie%20logger.001.jpeg "screen1")
![screen2](/movie%20logger/movie%20logger.002.jpeg "screen2")
![screen3](/movie%20logger/movie%20logger.003.jpeg "screen3")
![screen4](/movie%20logger/movie%20logger.004.jpeg "screen4")
![screen5](/movie%20logger/movie%20logger.005.jpeg "screen5")
![screen6](/movie%20logger/movie%20logger.006.jpeg "screen6")
![screen7](/movie%20logger/movie%20logger.007.jpeg "screen7")
![screen8](/movie%20logger/movie%20logger.008.jpeg "screen8")
![screen9](/movie%20logger/movie%20logger.009.jpeg "screen9")
![screen10](/movie%20logger/movie%20logger.010.jpeg "screen10")

### Schedule
* Monday - pseudocode routes, figure out seed data / recommedation data / start recommendation logic
* Tuesday - Establish schemas, start to write routes
* Wednesday - Continue with routes, continue recommendation logic, start views
* Thursday - Continue with views, finish routes
* Friday - Finish views