/**
 * Created by tc004 on 2017/8/30.
 */
var mongoose = require('mongoose');
var schema = require('../schema/user');

module.exports = mongoose.model('User', schema);  //定义模型，后期都是通过操作模型来实现各种操作
