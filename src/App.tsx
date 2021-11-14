import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import './App.css';
import Hero from './Components/Hero/Hero';
import { client } from './GraphQL/ApolloClient';
import store from './Utils/Store';

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
