const { loadFilesSync } = require('@graphql-tools/load-files');
const { join } = require('path');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');

const typeDefinitions = loadFilesSync(join(__dirname, './types/**/*.graphql'));
const resolvers = loadFilesSync(join(__dirname, './resolver/**/*.resolver.js'));

const schema = makeExecutableSchema({ typeDefs: mergeTypeDefs(typeDefinitions), resolvers: mergeResolvers(resolvers) });

module.exports = schema;
