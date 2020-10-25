import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './redux/store';
// import * as firebase from 'firebase';
//
// const firebaseConfig = {
//
// <script src="/__/firebase/7.24.0/firebase-app.js"></script>
//
//
//     <script src="/__/firebase/7.24.0/firebase-analytics.js"></script>
//
// <script src="/__/firebase/init.js"></script>
// };
//
// firebase.initializeApp();


ReactDOM.render(
  <React.StrictMode>
      <HashRouter>
          <Provider store={store}>
          <App />
          </Provider>
      </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
