/**
 * Created by tc004 on 2017/8/30.
 */
var mongoose = require('mongoose');

module.exports = new mongoose.Schema({  //定义表结构
    title: String,
    summary:String,
    detail: String,
    imgSrc: String
})