import { ApolloServer, Config, IResolvers } from "apollo-server-express";
//import passport from "passport";

import schema from "../schema";

const root = {
  ip: function (args, request) {
    return request.ip;
  }
};

const config: Config = {
  schema: schema,
  // typeDefs: typeDefs,
  // resolvers: resolvers,
  context: async ({ req, res }) => {
    //const customer = await auth(req, res);
   
    return { ip: req.ip };
  },
  playground: true,
  introspection: true,
  // process.env.NODE_ENV === "development",
  rootValue: root,
  uploads: { maxFileSize: 100000000, maxFiles: 5 },
};

export const apolloServer = new ApolloServer(config);
