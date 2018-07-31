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

        for (let i = 1; i < friends.length; i++) {
            let friendsScore = friends[i].total_score
            let scoreArray = friends[i].scores
            friendsScore = scoreArray.reduce(sumArray)
            friends[i].total_score = friendsScore
        }

        let newPersonScore = req.body.scores // gets scores from input
        let newPersonScoreInt = newPersonScore.map(function (x) {  // parse score as number
            return parseInt(x, 10);
        });
        newPersonTotalScore = newPersonScoreInt.reduce(sumArray)

        let lowestScoreArray = []
        for (i = 1; i < friends.length; i++) {  // getting diff & set in object
            friends[i].diff = (Math.abs(friends[i].total_score - newPersonTotalScore))
            lowestScoreArray.push(friends[i].diff)
        }

        let lowestScore = (Math.min(...lowestScoreArray))


        for (i = 1; i < friends.length; i++) {  // loop to match the lowest score to diff
            let diff = friends[i].diff
            if (lowestScore === diff ) {
                friends[0].name = friends[i].name
                friends[0].photo = friends[i].photo
                console.log(friends[0].name)
            }
        }

        friends.push(req.body)
        //console.log(req.body)
    })
    app.get('/api/randomName', function (req, res) {
        res.json(randomName)
    })
}

