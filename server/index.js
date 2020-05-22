require('module-alias/register');

const express = require('express');

const schema = require('@server/src/schema');
const jwtMiddleware = require('@server/src/middlewares/jwt');

const app = express();

app.use(jwtMiddleware);

app.use((req, res, next) => {
  console.log(req.user);

  next();
});

schema.applyMiddleware({ app });

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${schema.graphqlPath}`));
