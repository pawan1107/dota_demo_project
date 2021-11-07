import { onError } from "@apollo/client/link/error";
import { STRATZ_GRAPHQL_API } from "../Constants/Api";
import {
    ApolloClient,
    InMemoryCache,
    HttpLink,
    from,
  } from "@apollo/client";

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.map(({ message }) => {
        console.log("GraphQL Error - ", message)
        });
    } else if (networkError) {
        console.log("Network Error - ", networkError.message)
    }
});

const link = from([
    errorLink,
    new HttpLink({ uri: STRATZ_GRAPHQL_API }),
]);

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
});
