import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCMi5-8QcweCuP91S2IkgZYNfHZUWqtU0g',
      authDomain: 'manager-32667.firebaseapp.com',
      databaseURL: 'https://manager-32667.firebaseio.com',
      projectId: 'manager-32667',
      storageBucket: 'manager-32667.appspot.com',
      messagingSenderId: '345721350213'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
