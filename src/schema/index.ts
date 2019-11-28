import { gql, makeExecutableSchema } from "apollo-server-express";
import { GraphQLSchema } from "graphql";
import { merge } from "lodash";
import { resolvers as TeacherResolvers, typeDef as Teacher } from "./TeacherSchema";
// If you had Query fields not associated with a
// specific type you could put them here
const Query = gql`
  type Query {
    _empty: String
  }
`;

const Mutation = gql`
  type Mutation {
    _empty: String
  }
`;

const resolvers = {};

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [
    Query,
    Mutation,
    Teacher,
  ],
  resolvers: merge(
    resolvers,
    TeacherResolvers,
  )
});

export default schema;