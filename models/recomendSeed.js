// const db = mongoose.connection

// db.on('open', () => {
//     // bring in the array of starter fruits
//         const startFruits = [
//         { name: "Orange", color: "orange", readyToEat: false },
//         { name: "Grape", color: "purple", readyToEat: false },
//         { name: "Banana", color: "orange", readyToEat: false },
//         { name: "Strawberry", color: "red", readyToEat: false },
//         { name: "Coconut", color: "brown", readyToEat: false },
//       ]
//       //delete all the existing fruits
//       Fruit.deleteMany({})
//         .then(deletedFruits => {
//             console.log('this is what .remove returns', deletedFruits)
//             Fruit.create(startFruits)
//                 .then(data => {
//                     console.log('here are the newly created fruits', data)
//                     // always close the connection to the db
//                     db.close()
//                 })
//                 .catch(error => {
//                     console.log(error)
//                     //always close the connection to the db
//                     db.close()
//                 })
//         .catch(error => {
//             console.log(error)
//             // always close the connection to the db
//             db.close(error)
//         })
//         })
        
//       //create a bunch of new fruits from startFruits
// })