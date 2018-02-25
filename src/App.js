import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillmount() {
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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
