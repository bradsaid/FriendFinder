const friends = require('../data/friends.js')
const randomName = require('../data/randomName.js')

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends)
    })
    app.post('/api/friends', function (req, res) {

        function sumArray(total, num) {   // function to sum array
            return total + num
        }

        let friendsScoresObj = {
        }
        let scoreSums = []
        let diffSums = []

        for (let i = 0; i < friends.length; i++) {
            friendsScoresObj[i] = { name: friends[i].name, score: friends[i].scores, photo: friends[i].photo }
            //friendsScoresArray.push(friends[i].scores) // get each score array
        }

        for (let i = 0; i < friendsScoresObj.length; i++) {   // loop through array and sum, pop into new array
            // STUCK HERE - NEED TO GET SCORE FROM FRIENDSSCORESARRAY OBJECT
            //scoreSums.push(score.reduce(sumArray))
        }
        //console.log(scoreSums)

        let newPersonScore = req.body.scores // gets scores from input
        let newPersonScoreInt = newPersonScore.map(function (x) {  // parse score as number
            return parseInt(x, 10);
        });
        newPersonTotalScore = newPersonScoreInt.reduce(sumArray)
        //console.log(newPersonTotalScore)

        for (i = 0; i < scoreSums.length; i++) {  // getting diff
            diffSums.push((Math.abs(scoreSums[i] - newPersonTotalScore)))
        }
        //console.log(diffSums)
        let matchSum = (Math.min(...diffSums))

       /* for (let i = 0; i < friends.length; i++) {
            if (matchSum = friends.length)
        }*/




        friends.push(req.body)


    })
    app.get('/api/randomName', function (req, res) {
        res.json(randomName)
    })
}

