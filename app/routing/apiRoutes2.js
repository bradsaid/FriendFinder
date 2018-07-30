const friends = require('../data/friends.js')
const randomName = require('../data/randomName.js')


module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends)
    })
    app.post('/api/friends', function (req, res) {


        // turning the new input into integer and summing
        let newPersonScore = req.body.scores
        let newPersonScoreInt = newPersonScore.map(function (x) {
            return parseInt(x, 10);
        });
        function sumArray(total, num) {
            return total + num
        }
        newPersonTotalScore = newPersonScoreInt.reduce(sumArray)
        //console.log(newPersonTotalScore)
        // ----------------------------------------------

        let newPerson = req.body
        let newPscore = req.body.scores
        let newPerson1 = -1
        let newPersonScores = 100
        let score = 0

        for ( i = 0; i < friends.length; i++) {
            for ( x = 0; x < newPscore.length; x++) {
                score = score + (Math.abs(parseInt(friends[i].scores)) - parseInt(newPscore[x]))
            }
            if (score <= newPersonScores) {
                newPerson = i
                newPersonScores = score
            }
            score = 0
        }
        
        friends.push(req.body)
     

        

        







       /* for (let a = 0; a < friends.length; a++) {
            let scoreCompare = friends[a]
            for (let b = 0; b < scoreCompare.scores.length; b++) {
                let diff = (Math.abs(scoreCompare.scores[b]) - parseInt(newPersonScore[b]))
                scoreDifference += diff
                if (scoreDifference <= 0) {

                }

            }



            //scoresArray[a] = scoreDifference // make array with each score difference

        }*/






        
    })
    app.get('/api/randomName', function (req, res) {
        res.json(randomName)
    })
}

