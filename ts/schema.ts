import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} require('graphql');
// var GraphQLObjectType= require('graphql').GraphQLObjectType,
// GraphQLString =require('graphql').GraphQLString,
// GraphQLInt = require('graphql').GraphQLInt,
// GraphQLSchema = require('graphql').GraphQLSchema,
// GraphQLList = require('graphql').GraphQLList,
// GraphQLNonNull = require('graphql').GraphQLList;

var  Db =  require('./db');

const Files = new GraphQLObjectType({
  name: 'Files',
  description: 'User Files',
  fields () {
    return {
      title: {
        type: GraphQLString,
        resolve (Files) {
          return Files.title;
        }
      },
      content: {
        type: GraphQLString,
        resolve (Files) {
          return Files.content;
        }
      },
      User: {
        type: User,
        resolve (Files) {
          return Files.getPerson();
        }
      }
    };
  }
});

const User = new GraphQLObjectType({
  name: 'User',
  description: 'This represents a User',
  fields () {
    return {
      id: {
        type: GraphQLInt,
        resolve (User) {
          return User.id;
        }
      },
      firstName: {
        type: GraphQLString,
        resolve (User) {
          return User.firstName;
        }
      },
      lastName: {
        type: GraphQLString,
        resolve (User) {
          return User.lastName;
        }
      },
      email: {
        type: GraphQLString,
        resolve (User) {
          return User.email;
        }
      },
      files: {
        type: new GraphQLList(Files),
        resolve (User) {
          return User.getPosts();
        }
      }
    };
  }
});

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query object',
  fields () {
    return {
      user: {
        type: new GraphQLList(User),
        args: {
          id: {
            type: GraphQLInt
          },
          email: {
            type: GraphQLString
          }
        },
        resolve (root, args) {
          return Db.models.User.findAll({ where: args });
        }
      },
      files: {
        type: new GraphQLList(Files),
        resolve (root, args) {
          return Db.models.Files.findAll({ where: args });
        }
      }
    };
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutations',
  description: 'Functions to set stuff',
  fields () {
    return {
      addFile: {
        type: User,
        args: {
          firstName: {
            type: new GraphQLNonNull(GraphQLString)
          },
          lastName: {
            type: new GraphQLNonNull(GraphQLString)
          },
          email: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve (source, args) {
          return Db.models.User.create({
            firstName: args.firstName,
            lastName: args.lastName,
            email: args.email.toLowerCase()
          });
        }
      }
    };
  }
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});

exports.Schema = Schema;
