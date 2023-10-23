const joke = require('./mock/joke.json')
const proxy = {
    'GET /api/joke': joke,
    'POST /api/login': (req, res) => {
        const {password} = req.body
        if (password == '11111') {
            return res.send({
                code: 200
            })
        } else {
            return res.send({code: 500})
        }
    }
}

module.exports = proxy
