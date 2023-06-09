import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () =>
  new ApolloClient({
    uri: "http://192.168.16.101:4000/graphql",
    cache: new InMemoryCache(),
  });

export default createApolloClient;
