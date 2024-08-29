import { ApolloServer } from "@apollo/server";
import { graphQLSchema } from "./schema.js";
import { graphQLResolvers } from "../resolvers/resolvers.js";
import { startStandaloneServer } from "@apollo/server/dist/esm/standalone/index.js";
export const connectGraphQL = (port, envMode) => {
    const server = new ApolloServer({
        typeDefs: graphQLSchema,
        resolvers: graphQLResolvers,
    });
    startStandaloneServer(server, {
        listen: {
            port,
        },
    })
        .then(() => {
        console.log("server is running on Port:" + port + " in " + envMode + " Mode.");
    })
        .catch((err) => {
        console.log(err);
    });
};
