import { ApolloProvider } from '@apollo/client';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Hero from './Components/Hero';
import { client } from './GraphQL/ApolloClient';
import store from './store';

function App() {
  return (

    <Provider store={store}>
      <ApolloProvider client={client}>
        <div className="App">
          <Hero />
        </div>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
