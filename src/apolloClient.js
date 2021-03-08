import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

// HTTP connection to the API
const httpLink = createHttpLink({
  // Develop
  uri:
    "https://st5x5blp2jbazdwgpo2fouvx2u.appsync-api.us-east-2.amazonaws.com/graphql",
  key:
    "https://st5x5blp2jbazdwgpo2fouvx2u.appsync-api.us-east-2.amazonaws.com/graphql",

  // Production
  // uri: 'https://5q455nwzqjez3jb7wekz3ds3ke.appsync-api.us-east-2.amazonaws.com/graphql',
  // key: 'https://5q455nwzqjez3jb7wekz3ds3ke.appsync-api.us-east-2.amazonaws.com/graphql',
  headers: {
    // Develop Key
    "x-api-key": "da2-zjryoxoex5hslebvxpqhs5xkgi"
    // Production Key
    // "x-api-key": 'da2-dc4waqi6sncpxfzpdpbpjgj4cu'
  }
});

// Cache implementation
const cache = new InMemoryCache();

export default new ApolloClient({
  link: httpLink,
  cache
});
