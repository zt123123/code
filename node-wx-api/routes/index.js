var express = require('express');
var router = express.Router();
var fs = require('fs')
var path = require('path')

var multer = require('multer')
var upload = multer({ dest: 'upload/' })

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload', upload.array('file', 12), function (req, res, next) {

  for (var i = 0; i < req.files.length; i++) {
    var originName = req.files[i].originalname
    var fileName = i + originName.substring(originName.lastIndexOf('.'));

    fs.rename(req.files[i].path, "upload/" + fileName, function (err) {
      if (err) {
        throw err;
      }
      console.log('done!');
    })
  }

  res.writeHead(200, {
    "Access-Control-Allow-Origin": "*"//允许跨域。。。
  });
  // req.body 将具有文本域数据, 如果存在的话
  res.end(JSON.stringify(req.files) + JSON.stringify(req.body));

})
module.exports = router;
