// import Sequelize from 'sequelize';
// import Faker from 'faker';
// import _ from 'lodash';
var Sequelize = require('sequelize'),
    Faker  = require('faker'),
    _      = require('lodash');

var fs = require("fs");
var call = require("try-call");

function async (filename, options, callback) {
  if(arguments.length == 2){
    callback = options;
    options = {};
  }

  fs.readFile(filename, options, function(error, bf){
    if(error) return callback(error);
    call(parse.bind(null, bf), callback);
  });
}

function sync (filename, options) {
  return parse(fs.readFileSync(filename, options));
}

function parse (bf) {
  return JSON.parse(bf.toString().replace(/^\ufeff/g, ''));
}

var config = function() {
   var obj = sync('./config.json');
  
  return obj;
 
};


var Conn = new Sequelize(
  config().local.name,
   config().local.user,
   config().local.pass,
  {
    dialect:config().local.dialect,
    host: config().local.host
  }
);
var attributes;
var clean_attributes=[];
config().local.tables.forEach(function(element) {
 
  clean_attributes.push(element.attributes);
}, this);

// console.log(clean_attributes);
for (var index = 0; index < clean_attributes.length; index++) {
  var element = clean_attributes[index];
  console.log(element.col0);
}
// console.log(config().local.tables.attributes.firstName.type);

const Person = Conn.define('person', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    //how to ommit quotes around a string!?
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  }
});

const Post = Conn.define('post', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// Relations
Person.hasMany(Post);
Post.belongsTo(Person);
//before force delete get all records 
// console.log(Person.all());

//merge the records from online host and local host and do insert again
// Conn.sync({ force: true }).then(function(){
//   _.times(10, function(){
//       return Person.create({
//       firstName: Faker.name.firstName(),
//       lastName: Faker.name.lastName(),
//       email: Faker.internet.email()
//     }).then(person => {
//       return person.createPost({
//         title: `Sample post by ${person.firstName}`,
//         content: 'here is some content'
//       });
//     });
//   });
// });

// export default Conn;
module.exports.config = config;

