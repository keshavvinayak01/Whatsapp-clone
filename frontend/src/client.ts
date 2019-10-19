import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { getMainDefinition } from 'apollo-utilities';
import { WebSocketLink } from 'apollo-link-ws';
import { ApolloLink, split } from 'apollo-link';

const httpUri = process.env.REACT_APP_SERVER_URL + '/graphql';
const wsUri = httpUri.replace('/^https?/', 'ws');

const httpLink = new HttpLink({
  uri: httpUri,
});

const inMemoryCache = new InMemoryCache();

const wsLink = new WebSocketLink({
  uri : wsUri,
  options : {
    // Automatic reconnect in case of connection error
    reconnect : true,
  },
});

export interface Definition{
  kind : string;
  operation? : string;
};

const terminatingLink = split(
  ({ query }) => {
    const { kind, operation }: Definition = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink
);

const link = ApolloLink.from([terminatingLink]);

export default new ApolloClient({
  link,
  cache: inMemoryCache,
});
