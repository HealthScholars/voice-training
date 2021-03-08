import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { NormalizedCacheObject } from "@apollo/client/cache/inmemory/types";

// HTTP connection to the API
const httpLink = createHttpLink({
  // Develop
  uri:
    "https://st5x5blp2jbazdwgpo2fouvx2u.appsync-api.us-east-2.amazonaws.com/graphql",
  headers: {
    // Develop Key
    "x-api-key": "da2-zjryoxoex5hslebvxpqhs5xkgi"
  }
});

// Cache implementation
const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache
});
export default apolloClient;
