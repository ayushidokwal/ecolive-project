import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Bhome from './Containers/Home/Bhome'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import Firebase, { FirebaseContext } from './components/Firebase';

const app = <BrowserRouter><App/></BrowserRouter>
ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
      {app}
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
