import { ApolloServer } from "@apollo/server";
import { graphQLSchema } from "./schema/schema.js";
import { graphQLResolvers } from "./resolvers/resolvers.js";
export const connectGraphQL = () => {
    const server = new ApolloServer({
        typeDefs: graphQLSchema,
        resolvers: graphQLResolvers,
    });
    return server;
    // startStandaloneServer(server, {
    //   listen: {
    //     port,
    //   },
    // })
    //   .then(() => {
    //     console.log(
    //       "server is running on Port:" + port + " in " + envMode + " Mode."
    //     );
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
};
