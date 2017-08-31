var express = require('express');
var router = express.Router();
var User = require('../model/user');
var Login = require('../model/login');
var News = require('../model/news');
/* GET home page. */

router.get('/', function (req, res, next) {
    var userId = '';
    if (req.cookies.userId) {
        userId = req.cookies.userId;
    }
    //获取用户列表
    User.find({}, function (err, data) {
        if (!err) {
            return data;
        }
    }).then(function (user) {
        var obj = {};
        obj.user = user;

        //获取cookie
        Login.findById(userId, function (err, data) {
            if (data) {
                obj.username = data.username;
            }else{
                obj.username = '';
            }
        })

        //获取文章列表
        News.find({}, function (err, data) {
            obj.article = data;
            res.render('index', obj);
        })
    });
});


module.exports = router;
