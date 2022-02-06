/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
} from 'react-native';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error';
import { ApolloLink, concat } from 'apollo-link';
import DebounceLink from 'apollo-link-debounce';
// import apolloLogger from 'apollo-link-logger';
import AppNavigator from '@router/AppNavigation';
import { BASE_URL, GITHUB_TOKEN } from '@constants/endpoints'
import FragmentMatcher from '@config/fragmentMatcher'

const DEFAULT_DEBOUNCE_TIMEOUT = 100;

console.disableYellowBox = true;
class App extends Component {

  createClient() {
    const httpLink = ApolloLink.from([
      new DebounceLink(DEFAULT_DEBOUNCE_TIMEOUT),
      new HttpLink({ uri: BASE_URL }),
    ]);
    // handle network error
    const errorLink = onError(({ networkError }) => {
        if (networkError.statusCode === 401) {
          console.log(networkError)
        }
      // let errorMessage = networkError.statusCode === 401 ? 'Network error 104, handled' : 'link sucess'
      // console.log(errorMessage, networkError)
    })

    // apply widdleware to add access token to request
    let middlewareLink =  new ApolloLink((operation, forward) => {
      operation.setContext({
        headers: {
        authorization : `Bearer ${GITHUB_TOKEN}`
        }
      })
      return forward(operation)
    })

    const link = concat(middlewareLink, httpLink)

    // Initialize Apollo Client with URL to our server
    return new ApolloClient({
    link: link,
    cache: new InMemoryCache({
      dataIdFromObject: o => o.id,
      fragmentMatcher: FragmentMatcher
    }),
    connectToDevTools: true,
    })
  }
  
  render() {
    return (
      <ApolloProvider client={this.createClient()}>
        <SafeAreaView style={{ flex: 1 }}>
          <AppNavigator />
        </SafeAreaView>
      </ApolloProvider>
    );
  }
};

export default App;
