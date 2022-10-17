const mongoose = require('./connection')

const Rec = require("./recommendation")


const db = mongoose.connection

db.on('open', () => {
    const seedMovies = [
      {

        userThoughts: 'So many webs!',
        dateLogged: '2022-10-14',
        imdbId: 'tt0145487',
        movieTitle: 'Spider-Man',
        releaseYear: '2002',
        poster: 'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg',
        director: 'Sam Raimi',
        plot: "Based on Marvel Comics' superhero character, this is a story of Peter Parker who is a nerdy high-schooler. He was orphaned as a child, bullied by jocks, and can't confess his crush for his stunning neighborhood girl Mary Jane Watson. To say his life is ",
        genre: 'Action, Adventure, Sci-Fi',

      },
      {

        userThoughts: 'Very sad movie :(',
        dateLogged: '2022-10-14',
        imdbId: 'tt0119349',
        movieTitle: 'The Ice Storm',
        releaseYear: '1997',
        poster: 'https://m.media-amazon.com/images/M/MV5BYTU1YzEzN2ItMzc0MS00Y2VlLWEyZWQtNDUyNGZhOGE3YTkyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg',
        director: 'Ang Lee',
        plot: "During the 1973 Thanksgiving weekend, the Hoods are - relationship-wise, skidding out-of-control, isolated from each other; Benjamin reels from drink-to-drink, His wife, Elena's losing patience with Ben's incessant lies. Home for the holidays, their son, Paul, heads into Manhattan, in search of a rich girl from his prep school. Wendy, the teenage daughter, roams the neighborhood, exploring the liquor and lingerie of her friends' parents, looking for something - anything - new. Then, an ice storm hits, and their problems seem inconsequential, and nothing will ever be the same.",
        genre: 'Drama',

      },
      {

        userThoughts: 'cool movie but smoking is bad',
        dateLogged: '2022-10-14',
        imdbId: 'tt0110912',
        movieTitle: 'Pulp Fiction',
        releaseYear: '1994',
        poster: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
        director: 'Quentin Tarantino',
        plot: 'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.',
        genre: 'Crime, Drama',

      },
      {

        userThoughts: 'wow toys!',
        dateLogged: '2022-10-14',
        imdbId: 'tt0114709',
        movieTitle: 'Toy Story',
        releaseYear: '1995',
        poster: 'https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg',
        director: 'John Lasseter',
        plot: 'A little boy named Andy loves to be in his room, playing with his toys, especially his doll named ',
        genre: 'Animation, Adventure, Comedy',

      },
      {

        userThoughts: 'blood sprinklers are cool',
        dateLogged: '2022-10-14',
        imdbId: 'tt0120611',
        movieTitle: 'Blade',
        releaseYear: '1998',
        poster: 'https://m.media-amazon.com/images/M/MV5BOTk2NDNjZWQtMGY0Mi00YTY2LWE5MzctMGRhZmNlYzljYTg5XkEyXkFqcGdeQXVyMTAyNjg4NjE0._V1_SX300.jpg',
        director: 'Stephen Norrington',
        plot: 'In a world where vampires walk the earth, Blade has a goal. His goal is to rid the world of all vampire evil. When Blade witnesses a vampire bite Dr. Karen Jenson, he fights away the beast and takes Jenson back to his hideout. Here, alongside Abraham Whistler, Blade attempts to help heal Jenson. The vampire Quinn who was attacked by Blade, reports back to his master Deacon Frost, who is planning a huge surprise for the human population.',
        genre: 'Action, Horror, Sci-Fi',

      },
      {

        userThoughts: 'wow cheesy',
        dateLogged: '2022-10-15',
        imdbId: 'tt0382932',
        movieTitle: 'Ratatouille',
        releaseYear: '2007',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg',
        director: 'Brad Bird, Jan Pinkava',
        plot: "A rat named Remy dreams of becoming a great French chef despite his family's wishes and the obvious problem of being a rat in a decidedly rodent-phobic profession. When fate places Remy in the sewers of Paris, he finds himself ideally situated beneath a restaurant made famous by his culinary hero, Auguste Gusteau. Despite the apparent dangers of being an unlikely, and certainly unwanted, visitor in the kitchen of a fine French restaurant, Remy's passion for cooking soon sets into motion a hilarious and exciting rat race that turns the culinary world of Paris upside down.",
        genre: 'Animation, Adventure, Comedy',

      },
      {

        userThoughts: 'so sweet',
        dateLogged: '2022-10-15',
        imdbId: 'tt0910970',
        movieTitle: 'WALL·E',
        releaseYear: '2008',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_SX300.jpg',
        director: 'Andrew Stanton',
        plot: "In a distant, but not so unrealistic, future where mankind has abandoned earth because it has become covered with trash from products sold by the powerful multi-national Buy N Large corporation, WALL-E, a garbage collecting robot has been left to clean up the mess. Mesmerized with trinkets of Earth's history and show tunes, WALL-E is alone on Earth except for a sprightly pet cockroach. One day, EVE, a sleek (and dangerous) reconnaissance robot, is sent to Earth to find proof that life is once again sustainable. WALL-E falls in love with EVE. WALL-E rescues EVE from a dust storm and shows her a living plant he found amongst the rubble. Consistent with her ",
        genre: 'Animation, Adventure, Family',

      },
      {

        userThoughts: 'good pigs',
        dateLogged: '2022-10-15',
        imdbId: 'tt0112431',
        movieTitle: 'Babe',
        releaseYear: '1995',
        poster: 'https://m.media-amazon.com/images/M/MV5BYjg4ZjUzMzMtYzlmYi00YTcwLTlkOWUtYWFmY2RhNjliODQzXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg',
        director: 'Chris Noonan',
        plot: "Gentle farmer Arthur Hoggett wins a piglet named Babe at a county fair. Narrowly escaping his fate as Christmas dinner when Farmer Hoggett decides to show him at the next fair, Babe bonds with motherly border collie Fly and discovers that he can herd sheep too. But will the other farm animals, including Fly's jealous husband, Rex, accept a pig who doesn't conform to the farm's social hierarchy?",
        genre: 'Comedy, Drama, Family',

      },
      {

        userThoughts: 'Cenobites rule',
        dateLogged: '2022-10-15',
        imdbId: 'tt0093177',
        movieTitle: 'Hellraiser',
        releaseYear: '1987',
        poster: 'https://m.media-amazon.com/images/M/MV5BOGRlZTdhOGYtODc5NS00YmJkLTkzN2UtZDMyYmRhZWM1NTQwXkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
        director: 'Clive Barker',
        plot: "When Kirsty's father, Larry, and stepmother, Julia, move into Larry's childhood home, Kirsty and her boyfriend take a room nearby. Unfortunately for all involved, Larry's house is already occupied: before the family's arrival, Larry's disreputable brother, Frank, used a supernatural puzzle box to summon a gang of other-dimensional demon sadists. Now, Frank requires a series of blood sacrifices to escape the clutches of Pinhead and the cenobites.",
        genre: 'Horror, Thriller',

      },
      {

        userThoughts: 'Cool documentary',
        dateLogged: '2022-10-15',
        imdbId: 'tt1190080',
        movieTitle: '2012',
        releaseYear: '2009',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTY0MjEyODQzMF5BMl5BanBnXkFtZTcwMTczMjQ4Mg@@._V1_SX300.jpg',
        director: 'Roland Emmerich',
        plot: "Dr. Adrian Helmsley, part of a worldwide geophysical team investigating the effect on the earth of radiation from unprecedented solar storms, learns that the earth's core is heating up. He warns U.S. President Thomas Wilson that the crust of the earth is becoming unstable and that without proper preparations for saving a fraction of the world's population, the entire race is doomed. Meanwhile, writer Jackson Curtis stumbles on the same information. While the world's leaders race to build ",
        genre: 'Action, Adventure, Sci-Fi',

      },
      {

        userThoughts: "It's nice they ended up being friends",
        dateLogged: '2022-10-15',
        imdbId: 'tt5034838',
        movieTitle: 'Godzilla vs. Kong',
        releaseYear: '2021',
        poster: 'https://m.media-amazon.com/images/M/MV5BZmYzMzU4NjctNDI0Mi00MGExLWI3ZDQtYzQzYThmYzc2ZmNjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg',
        director: 'Adam Wingard',
        plot: "Legends collide as Godzilla and Kong, the two most powerful forces of nature, clash on the big screen in a spectacular battle for the ages. As a squadron embarks on a perilous mission into fantastic uncharted terrain, unearthing clues to the Titans' very origins and mankind's survival, a conspiracy threatens to wipe the creatures, both good and bad, from the face of the earth forever.",
        genre: 'Action, Sci-Fi, Thriller',


      },
      {

        userThoughts: 'Big squishy robot',
        dateLogged: '2022-10-17',
        imdbId: 'tt2245084',
        movieTitle: 'Big Hero 6',
        releaseYear: '2014',
        poster: 'https://m.media-amazon.com/images/M/MV5BMDliOTIzNmUtOTllOC00NDU3LWFiNjYtMGM0NDc1YTMxNjYxXkEyXkFqcGdeQXVyNTM3NzExMDQ@._V1_SX300.jpg',
        director: 'Don Hall, Chris Williams',
        plot: 'When a devastating event befalls the city of San Fransokyo and catapults Hiro into the midst of danger, he turns to Baymax and his close friends adrenaline junkie Go Go Tomago, neatnik Wasabi, chemistry whiz Honey Lemon and fanboy Fred. Determined to uncover the mystery, Hiro transforms his friends into a band of high-tech heroes called ',
        genre: 'Animation, Action, Adventure',

      }
    ]
 

      Rec.deleteMany({})
        .then(data => {
            Rec.create(seedMovies)
                .then(data =>{
                    console.log("data from create", data)
                    db.close()
                })
                .catch(err => {
                    console.log(err)
                    db.close()
                })
        })
        .catch(err => {
            console.log(err)
            db.close(err)
        })
})