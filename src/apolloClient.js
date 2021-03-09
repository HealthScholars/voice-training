import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

// HTTP connection to the API
const httpLink = createHttpLink({
  uri: "",
  key: "",

  headers: {
    "x-api-key": ""
  }
});

// Cache implementation
const cache = new InMemoryCache();

export default new ApolloClient({
  link: httpLink,
  cache
});
