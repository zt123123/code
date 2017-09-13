/**
 * Created by tc004 on 2017/9/8.
 */
import _ from 'lodash'

const users = [
    {name: 'aaa', age: 21},
    {name: 'ddd', age: 20},
    {name: 'ccc', age: 22}
];

const names = _.chain(users)
    .map(user => user.name)
    .join(',')
    .value();

// console.log(names);

const minAge = _.chain(users)
    .map(user => user.age)
    .max(age => age)
    .value();

// console.log(minAge);

const sort = _.chain(users)
    .sortBy('age')
    .map(user => user.age)
    .first()
    .value();

// console.log(sort);

const usersObj = [
    {name: 'aaa', age: 21},
    {name: 'ddd', age: 20},
    {name: 'ccc', age: 22}
];

const obj = _.chain(usersObj)
    .map(user => {
        return ['userOne', user.age]
    })
    .zipObject()
    .value();

// console.log(obj);

const chunk = _.chunk([1, 2, 3, 4, 5, 6], 3)
// console.log(chunk)


console.log("%c123%c456", "background-color:cyan;color:white;margin-right:10px;padding:10px;border-radius:5px;line-height:40px", "background-color:cyan;color:white;padding:10px;border-radius:5px;line-height:40px");

// var aa = 123;
// var bb = 456;
// var cc = 789;

// window.$_ = 'aaaaaaaaaaaaaaaa';

// window.a = function () {
//     return console.log("%c123%c456", "background-color:cyan;color:white;margin-right:10px;padding:10px;border-radius:5px;line-height:40px", "background-color:cyan;color:white;padding:10px;border-radius:5px;line-height:40px");
// }


var s=window.console

p("你好", function () {
    return console.log("%c123%c456", "background-color:cyan;color:white;margin-right:10px;padding:10px;border-radius:5px;line-height:40px", "background-color:cyan;color:white;padding:10px;border-radius:5px;line-height:40px"),
        "456";
})

function p(t, o) {
    Object.defineProperty(window, t, {
        get: o
    })
}

// var recent = window.$_;
// if (recent == 'aaa') {
//     console.log(aa)
//     recent = undefined;
// } else if (recent == 'bbb') {
//     console.log(bb)
//     recent = undefined;
// } else {
//     console.log(cc)
//     recent = undefined;
// }

// console.log(aa());

