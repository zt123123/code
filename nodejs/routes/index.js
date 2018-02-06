const express = require('express');
const router = express.Router();
const request = require('request');
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const url = 'https://movie.douban.com/top250';


router.get('/', function (req, res, next) {
    res.send("index");
});

router.get('/api', function (req, res, next) {


    // res.render('movie');


    request(url, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            let $ = cheerio.load(body.toString());

            let arr = $('#content > div > div.article > ol > li');

            let data = [];


            arr.each(function (key, val) {
                let movieObj = {};
                let prefix = $(val).find('.info');
                movieObj.imgUrl = $(val).find('img').attr('src');
                movieObj.title = prefix.find('.title').text();
                movieObj.desc = prefix.find('.bd').find('p').text();
                movieObj.detail = $(val).find('.pic').find('a').attr('href');
                movieObj.blockqute = prefix.find('.bd').find('.inq').text();
                movieObj.ratingstarBg = prefix.find('.star').find('span').eq(0).css("backgroundImage");
                movieObj.ratingstarPos = prefix.find('.star').find('span').eq(0).css("backgroundPosition");
                movieObj.ratingnum = prefix.find('.star').find('span').eq(1).text();

                data.push(movieObj);
            });
            // console.log(data);
            fs.writeFileSync('movie.json', JSON.stringify(data, null, 2), 'utf-8');
            res.render('movie');
        }
    });
});

router.get('/user', function (req, res, next) {
    res.send("user");
});


module.exports = router;
