const proxy = {
    'GET /api/joke': {result: [{hashId:1, content:'这是一个笑话'}]},
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