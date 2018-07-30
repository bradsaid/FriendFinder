const friends = require('../data/friends.js')
const randomName = require('../data/randomName.js')




module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friends)
    })
    app.post('/api/friends', function(req, res) {
        friends.push(req.body)

    })
    app.get('/api/randomName', function(req, res) {
        res.json(randomName)
    })
    /*app.post('/api/randomName', function(req, res) {
        req.json(randomName)
    })*/
}

