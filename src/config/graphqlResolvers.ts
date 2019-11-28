import { createError, isInstance } from "apollo-errors";
import { createResolver } from "apollo-resolvers";

import { UnknownError, AuthenticationRequiredError, GeneralError } from "../config/graphqlErrors";

export const baseResolver = createResolver(
  // incoming requests will pass through this resolver like a no-op
  undefined,

  /*
    Only mask outgoing errors that aren't already apollo-errors,
    such as ORM errors etc
  */
  (root, args, context, error) =>
    isInstance(error)
      ? error
      : GeneralError({
          data: {
            originalMessage: error.message,
            originalError: error.name
          }
        })
);

// export const isAuthenticatedResolver = baseResolver.createResolver(
//   // Extract the user from context (undefined if non-existent)
//   (root, args, { customer }, info) => {
//     if (!customer) throw new AuthenticationRequiredError();
//   }
// );