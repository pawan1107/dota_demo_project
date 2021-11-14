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
        console.error("GraphQL Error - ", message)
        });
    } else if (networkError) {
        console.error("Network Error - ", networkError.message)
    }
});

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([
        errorLink,
        new HttpLink({ uri: STRATZ_GRAPHQL_API }),
    ]),
});
