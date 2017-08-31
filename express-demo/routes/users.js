var express = require('express');
var router = express.Router();
var Login = require('../model/login');

var apiData = {
    errorcode: 0,
    errordesc: ''
};

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('123');
})

router.post('/login', function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    if (username == '') {
        apiData.errorcode = 1;
        apiData.errordesc = '用户名不能为空！';
        res.json(apiData);
        return;
    }
    if (password == '') {
        apiData.errorcode = 2;
        apiData.errordesc = '密码不能为空！';
        res.json(apiData);
        return;
    }

    Login.findOne({username: username, password: password}, function (err, data) {
        if (!err) {
            if (data) {
                res.cookie('userId', data._id);
                apiData.errordesc = '登陆成功！';
                res.json(apiData);
            } else {
                apiData.errorcode = 3;
                apiData.errordesc = '用户名或者密码错误！';
                res.json(apiData);
                return;
            }
        }
    })
});

router.post('/logout', function (req, res, next) {
//todo   不知道怎么解决登出问题

    // res.cookies.userId = '';

    // apiData.errorcode = 0;
    // apiData.errordesc = '登出成功！';
    //
    // res.json(apiData);
    //
    // next();
})

module.exports = router;
