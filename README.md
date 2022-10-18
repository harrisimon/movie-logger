# Project 2
## Movie Logger

## Link to active project
https://movielogger.fly.dev/

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
![ERD Diagram](/Movie%20logger%20ERD.drawio.png "erd diagram")<!--  no ERD! -->

### Wireframes
![screen1](/planning-docs/movie%20logger/movie%20logger.001.jpeg "screen1")
![screen2](/planning-docs/movie%20logger/movie%20logger.002.jpeg "screen2")
![screen3](/planning-docs/movie%20logger/movie%20logger.003.jpeg "screen3")
![screen4](/planning-docs/movie%20logger/movie%20logger.004.jpeg "screen4")
![screen5](/planning-docs/movie%20logger/movie%20logger.005.jpeg "screen5")
![screen6](/planning-docs/movie%20logger/movie%20logger.006.jpeg "screen6")
![screen7](/planning-docs/movie%20logger/movie%20logger.007.jpeg "screen7")
![screen8](/planning-docs/movie%20logger/movie%20logger.008.jpeg "screen8")
![screen9](/planning-docs/movie%20logger/movie%20logger.009.jpeg "screen9")
![screen10](/planning-docs/movie%20logger/movie%20logger.010.jpeg "screen10")

### Restful Routes Logs
| URL      | HTTP Verb | Action |
| ----------- | ----------- |-----------|
| /logs      | GET       | index       |
| /mine   | GET        |show |
| /new   | GET        |new |
| /new/result   | POST        |show |
| /logs   | POST        |create |
| /logs/:id/edit   | GET        |edit |
| /logs/:id   | PUT        |update |
| /logs/:id   | GET        |show |
| /logs/:id   | DELETE        |destroy |
| /mine   | GET        |show |

### Restful Routes Comments
| URL      | HTTP Verb | Action |
| ----------- | ----------- |-----------|
| /:logId      | POST       | show       |
| /delete/:logId /:commId     | DELETE       | destroy       |

### Restful Routes Trailer
| URL      | HTTP Verb | Action |
| ----------- | ----------- |-----------|
| /trailers/:logId      | GET       | show       |


### Unsolved Problems
- Incorporating a more robust search, rather than just a simple exact title fetch.
- Build out a full recommendation engine

### Schedule
* Monday - pseudocode routes, figure out seed data / recommedation data / start recommendation logic
* Tuesday - Establish schemas, start to write routes
* Wednesday - Continue with routes, continue recommendation logic, start views
* Thursday - Continue with views, finish routes
* Friday - Finish views
