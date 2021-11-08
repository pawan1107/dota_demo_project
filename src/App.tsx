import { ApolloProvider } from '@apollo/client';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import FetchConstants from './Actions/FetchConstants';
import './App.css';
import Hero from './Components/Hero/Hero';
import { client } from './GraphQL/ApolloClient';
import store from './Utils/Store';

function App() {
  return (

    <Provider store={store}>
      <ApolloProvider client={client}>
        <div className="App">
          <FetchConstants />
          <Hero />
        </div>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
