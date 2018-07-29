const friends = require('../data/friends.js')
let random = require('random-name')

let randomName = random()

module.exports = function(app) {
    app.get('api/friends', function(req, res) {
        res.json(friends)
    })
    app.post('api/friends', function(req, res) {
        friends.push(req.body)
        req.json(randomName)
    })
}

