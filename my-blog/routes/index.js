let express = require('express');
let router = express.Router();
let User = require('../model/user');
let Login = require('../model/login');
let News = require('../model/news');
/* GET home page. */

let apiData = {};

router.use('/', function (req, res, next) {
  apiData.errorcode = 0;
  apiData.errordesc = '';
  next();
});


router.post('/getArticle', (req, res, next) => {
  //  获取文章列表
  News.find({}, function (err, data) {
    if (!err) {
      res.json(data);
    }
  });
});

router.post('/getUser', (req, res, next) => {
  //  获取用户列表
  let pageSize = req.body.pageSize;                   //一页多少条
  let currentPage = req.body.currentPage;                //当前第几页
  let sort = {'name': 1};        //排序（按登录时间倒序）
  let condition = {};                 //条件
  let skipNum = (currentPage - 1) * pageSize;   //跳过数

  let whereStr = {};

  let promise = new Promise((resolve, reject) => {
    User.count(whereStr, function (err, doc) {
      if (!err) {
        resolve(doc);
      } else {
        reject();
      }
    })
  });
//分页
  promise.then((data) => {
    User.find(condition).skip(skipNum).limit(pageSize).sort(sort).exec(function (err, doc) {
      if (err) {
        console.log("Error:" + err);
      }
      else {
        res.json({total: data, tableData: doc});
      }
    })
  });
});
//删除用户
router.post('/deleteUser', (req, res, next) => {
  let whereStr = {'_id': req.body._id};
  User.remove(whereStr, function (err, doc) {
    if (err) {
      console.log("Error:" + err);
    }
    else {
      console.log(doc);
      apiData.errorcode = 0;
      apiData.errordesc = '删除成功';
      res.json(apiData);
    }
  });
});
//更新用户
router.post('/updateUser', (req, res, next) => {
  let id = req.body._id;
  let name = req.body.name;
  let className = req.body.className;
  let age = req.body.age;
  let gender = req.body.gender;
  let updateStr = {'name': name, 'age': age, className: className, gender: gender};

  User.findByIdAndUpdate(id, updateStr, function (err, doc) {
    if (err) {
      console.log("Error:" + err);
    }
    else {
      console.log(doc);
      apiData.errorcode = 0;
      apiData.errordesc = '修改成功';
      res.json(apiData);
    }
  });
});

//检查是否登录
router.post('/checkLogin', (req, res, next) => {
  if (!req.cookies.username) {
    apiData.errordesc = '未登录';
    res.json(apiData)
  } else {
    apiData.errorcode = '1';
    apiData.errordesc = '已经登录过';
    apiData.username = req.cookies.username;
    res.json(apiData)
  }
});


//登录
router.post('/login', (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
  console.log(`username:${username}`);
  console.log(`password:${password}`);
  if (username === '') {
    apiData.errorcode = 1;
    apiData.errordesc = '用户名不能为空！';
    res.json(apiData);
    return;
  }
  if (password === '') {
    apiData.errorcode = 2;
    apiData.errordesc = '密码不能为空！';
    res.json(apiData);
    return;
  }

  Login.findOne({username: username, password: password}, function (err, data) {
    if (!err) {
      if (data) {
        res.cookie('username', data.username);
        apiData.errorcode = 0;
        apiData.errordesc = '登陆成功！';
        apiData.username = data.username;
        res.json(apiData);
      } else {
        apiData.errorcode = 3;
        apiData.errordesc = '用户名或者密码错误！';
        res.json(apiData);
        return false;
      }
    }
  });
});

//登出
router.post('/logout', (req, res, next) => {
  res.clearCookie('username');
  apiData.errordesc = '退出成功';
  res.json(apiData);
});

//注册
router.post('/register', (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
  let repassword = req.body.repassword;

  if (username === '') {
    apiData.errorcode = 1;
    apiData.errordesc = '用户名不能为空！';
    res.json(apiData);
    return;
  }
  if (password === '') {
    apiData.errorcode = 2;
    apiData.errordesc = '密码不能为空！';
    res.json(apiData);
    return;
  }

  if (repassword === '') {
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
        return false;
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
  });
});

module.exports = router;
