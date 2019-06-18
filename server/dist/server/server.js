"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_yoga_1 = require("graphql-yoga");
const graphql_import_1 = require("graphql-import");
const resolvers_1 = require("./resolver/resolvers");
const port = process.env.PORT || 7777;
const typeDefs = graphql_import_1.importSchema(__dirname + '/schema/schema.graphql');
const server = new graphql_yoga_1.GraphQLServer({
    typeDefs,
    resolvers: resolvers_1.resolvers,
    resolverValidationOptions: { requireResolversForResolveType: false }
});
const options = {
    port,
    endpoint: '/graphql',
    subscriptions: '/subscriptions',
    playground: '/playground'
};
server.start(options, ({ port }) => console.log(`Server is running on http://localhost:${port}`));
//# sourceMappingURL=server.js.map