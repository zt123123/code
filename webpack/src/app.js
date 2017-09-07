/**
 * Created by tc004 on 2017/9/7.
 */
import $ from 'jquery';
import './app.less';
// import fs from 'fs'

import bgImg from './2.jpg'
import a from './a'

a.fun()

const str = 'hello webpack2!'


$("#app").html(str).css({'color': 'white', 'backgroundImage': `url(${bgImg})`})