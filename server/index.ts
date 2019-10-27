import { ApolloServer, gql, PubSub } from 'apollo-server-express';
import http from 'http';
import cookie from 'cookies';
import schema from './schema';
import { pool } from './db';
import { app } from './app';
import { origin, port, secret } from './env';
import { MyContext } from './context';
import sql from 'sql-template-strings';
import jwt from 'jsonwebtoken';


const pubsub = new PubSub();

const server = new ApolloServer({
  schema,
  context : async (session : any) => {
    // Access the request object
    let req = session.connection
    ? session.connection.context.request
    : session.req;

    // It's subscription
    if(session.connection) {
      req.cookies = cookie.parse(req.headers.cookie || '');
    }

    let currentUser;
    if(req.cookies.authToken) {
      const username = jwt.verify(req.cookies.authToken, secret) as string;
      if (username) {
        const { rows } = await pool.query(
          sql`select * from users where username=${username}`
        );
        currentUser = rows[0];
      }
    }

    let db;
    if(!session.connection) {
      db = await pool.connect();
    }

    return {
      currentUser,
      pubsub,
      res : session.res,
      db
    };
  },
  
  subscriptions : {
    onConnect(params, ws, ctx) {
      //  pass the request object to context
      return {
        request : ctx.request,
      };
    },
  },
  formatResponse :(res : any, { context } : { context : MyContext }) => {
    context.db.release();
    return res;
  },
});

server.applyMiddleware({
  app,
  path: '/graphql',
  cors : { credentials : true, origin },
});

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);


httpServer.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
