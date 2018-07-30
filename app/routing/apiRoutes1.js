const friends = require('../data/friends.js')
const randomName = require('../data/randomName.js')

let scoresArray = []

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friends)
        scoresArray = []
        for ( let y = 0; y < friends.length; y++) {
            let currentIndex = friends[y].scores
            let scoreAsInt = currentIndex.map(function (x) { 
                return parseInt(x, 10); 
              }); 
              function sumArray(total, num) {
                return total + num
            }
            totalScore = scoreAsInt.reduce(sumArray)
            scoresArray.push(totalScore)
            
        }
        console.log(scoresArray)

    })
    app.post('/api/friends', function(req, res) {
        friends.push(req.body)
        
        for ( let a = 0; a < friends.length; a++) {

        }


    })
    app.get('/api/randomName', function(req, res) {
        res.json(randomName)
    })
}

