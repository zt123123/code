var express = require('express');
var router = express.Router();
var Login = require('../model/login');


router.use(function (req, res, next) {
    console.log(req.body);
    next();
})

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
                apiData.errorcode = 0;
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

//注册
router.post('/register', function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    var repassword = req.body.repassword;

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

    if (repassword == '') {
        apiData.errorcode = 3;
        apiData.errordesc = '两次输入的密码不一致！';
        res.json(apiData);
        return;
    }

    Login.findOne({username: username}, function (err, data) {
        if (!err) {
            if (data) {
                // res.cookie('userId', data._id);
                apiData.errorcode = 4;
                apiData.errordesc = '此用户已经注册！';
                res.json(apiData);
                return;
            } else {
                new Login({
                    username: username,
                    password: password
                }).save();

                // res.cookie('userId', data._id);
                apiData.errorcode = 0;
                apiData.errordesc = '注册成功！';

                res.json(apiData);
            }
        }
    })
});

router.post('/logout', function (req, res, next) {
    console.log("now cookie :" + req.cookies.userId);
    res.clearCookie('userId');
    console.log('clear cookie');
    console.log("after clear cookie :" + req.cookies.userId);

    apiData.errorcode = 0;
    apiData.errordesc = '登出成功！';

    res.json(apiData);

    next();
})

module.exports = router;
