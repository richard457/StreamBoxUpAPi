// import Sequelize from 'sequelize';
// import Faker from 'faker';
// import _ from 'lodash';
var Sequelize = require('sequelize'),
    Faker  = require('faker'),
    _      = require('lodash');


var config = function(obj) {
  var obj={name:'StrimUpOpen',user:'root',pass:'@123456',dialect:'mysql',host:'localhost'};
  return obj;
};
// var obj={name:'StrimUpOpen',user:'root',pass:'@123456',dialect:'mysql',host:'localhost'};
// config(obj);
var Conn = new Sequelize(
  config().name,
   config().user,
   config().pass,
  {
    dialect:config().dialect,
    host: config().host
  }
);

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
Conn.sync({ force: true }).then(function(){
  _.times(10, function(){
      return Person.create({
      firstName: Faker.name.firstName(),
      lastName: Faker.name.lastName(),
      email: Faker.internet.email()
    }).then(person => {
      return person.createPost({
        title: `Sample post by ${person.firstName}`,
        content: 'here is some content'
      });
    });
  });
});

// export default Conn;
module.exports.config = config;

