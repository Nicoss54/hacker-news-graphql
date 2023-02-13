const { loadFilesSync } = require('@graphql-tools/load-files');
const { join } = require('path');
const { mergeSchemas } = require('@graphql-tools/schema');
const { createServer } = require('http');
const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer');
const logger = require('pino')();
const cors = require('cors');
const { expressMiddleware } = require('@apollo/server/express4');
const bodyParser = require('body-parser');

const schemasFile = loadFilesSync(join(__dirname, './feature/**/*.schema.js'));
const graphQlSchema = mergeSchemas({ schemas: schemasFile });

async function startApolloServer(schema) {
  const expressServer = express();
  const httpServer = createServer(expressServer);
  const graphqlServer = new ApolloServer({ schema, plugins: [ApolloServerPluginDrainHttpServer({ httpServer })] });

  await graphqlServer.start();

  expressServer.use('/graphql', cors(), bodyParser.json(), expressMiddleware(graphqlServer));

  await new Promise(resolve => {
    httpServer.listen(4000);
    logger.info(`🚀 Server ready at http://localhost:4000/graphql`);
    resolve();
  });
}

startApolloServer(graphQlSchema).catch(console.error);
