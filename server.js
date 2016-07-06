// import Express from 'express';
// import GraphHTTP from 'express-graphql';
// import Schema from './schema';


var Express = require('express'),
    GraphHTTP = require('express-graphql').GraphHTTP;
  var   Schema    = require('./schema');  
    




// Config
var APP_PORT = 4000;

// Start
var app = Express();

// GraphQL
// app.use('/graphql', GraphHTTP({
//   schema: Schema,
//   pretty: true,
//   graphiql: true
// }));

app.listen(APP_PORT, function() {
  console.log(`App listening on port ${APP_PORT}`);
});
