import React, { Component } from 'react';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDFy-D5t0pU7RNEAteHXygpTaHV2ukB2e0',
      authDomain: 'manager-9fac4.firebaseapp.com',
      databaseURL: 'https://manager-9fac4.firebaseio.com',
      storageBucket: 'manager-9fac4.appspot.com',
      messagingSenderId: '1054358185758'
    };

    firebase.initializeApp(config);
  }

  render() {
    // 2nd arg is the inital state which we might want to pass
    // 3rd arg is store enhancer
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
