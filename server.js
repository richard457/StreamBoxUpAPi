import Express from 'express';
import GraphHTTP from 'express-graphql';
import Schema from './schema';
// var  Db = require('./db');

// Db.config({name:'StrimUpOpen',user:'root',pass:'@123456',dialect:'mysql',host:'localhost'});

// Config
const APP_PORT = 4000;

// Start
const app = Express();

// GraphQL
app.use('/graphql', GraphHTTP({
  schema: Schema,
  pretty: true,
  graphiql: true
}));

app.listen(APP_PORT, ()=> {
  console.log(`App listening on port ${APP_PORT}`);
});
