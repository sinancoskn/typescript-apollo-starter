import { gql } from "apollo-server-express";
import { baseResolver } from "../../config/graphqlResolvers";
//import { Billboard } from "../../models";
import {getTeachers} from '../../service/TeacherService';

export const typeDef = gql`
  type Teacher {
    name: String
    courseID: String
  }

  extend type Query {
    teachers: [Teacher]
  }
`;

export const resolvers = {
  Query: {
    teachers: baseResolver.createResolver(async (root, args, context, info) => {
      const teacher = await getTeachers();
      console.log("haydaaa");
      console.log(teacher);
      return teacher;
    })
  },
  Mutation: {}
};