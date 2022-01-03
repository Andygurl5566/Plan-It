import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter} from "react-router-dom"
import {createStore} from "redux"
import allReducer from "./reducers&actions"
import {Provider} from "react-redux"



//Redux Setup

let store = createStore(allReducer)
store.subscribe(() => console.log(store.getState()))


ReactDOM.render(
  
  <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

