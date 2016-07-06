var test = require('./testModule');
var db = require('./db').config;

console.log(db({name:'StrimUpOpen',user:'root',pass:'@123456',dialect:'mysql',host:'localhost'}));

//console.log(test.Config("hello wordl"));
