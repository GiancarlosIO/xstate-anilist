import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';

import './tailwind.css';

import App from './App';

// graphiql: https://anilist.co/graphiql
const cache = new InMemoryCache();
const httpLink = createHttpLink({
  uri: 'https://graphql.anilist.co/',
  credentials: 'omit',
});

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors)
    // eslint-disable-next-line array-callback-return
    graphQLErrors.map(({ message, locations, path }) => {
      console.error(
        `[Graphql error]: Message: ${message}, Location: ${
          locations ? JSON.stringify(locations) : locations
        }, Path: ${path}`,
      );
    });

  if (operation.operationName === 'createSocketSession') {
    console.log(
      '%c Hey! looks like you have the socket feature activated and because you have not running the server the mutation is going to fail 😥. If you want to disable it just set socketDisable to true in the localStorage.',
      'color: #09f; background: rgba(0,0,0,0.02); padding: 12px 0',
    );
  }

  if (networkError) {
    console.error(`[Network Error]: ${networkError}`);
  }
});

// the order is very important!
const links = [errorLink, httpLink];

const client = new ApolloClient({
  cache,
  link: ApolloLink.from(links),
});

// https://anilist.co/search/anime

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.querySelector('#rootApp'),
);
