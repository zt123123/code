var http = require('http')
var request = require('request')
var url = require('url')

http.createServer(function (req, res) {
    var appid = "wx379aa258d55c3f3d"
    var secret = "f73da87fb5548fd1c9385528b854f5c9"
    var code = url.parse(req.url, true).query.code

    var pathname = url.parse(req.url, true).pathname;


    var api = `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=authorization_code`
    // https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code

    if (pathname == '/code') {
        request(api, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.end(body)
            }
        })
    } else {
        res.end('111111')
    }




}).listen(9999, function () {
    console.log('listen at 9999');
})
