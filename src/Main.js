import React from 'react';

import Screens from './screens';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import getEnvVars from '../config';

const { API_URI } = getEnvVars();

const uri = API_URI;
const cache = new InMemoryCache();

const client = new ApolloClient({
  uri,
  cache
});

const Main = () => {
  return (
    <ApolloProvider client={client}>
      <Screens />
    </ApolloProvider>
  );
  // (
  // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //   <Text style={{ color: '#0077cc', fontSize: 48, fontWeight: 'bold' }}>
  //     Hello world!!!
  //   </Text>
  //   <Image source={require('../assets/images/hello-world.jpg')} />
  // </View>
  // );
};

export default Main;
