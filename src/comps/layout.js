import React from 'react';
import { Outlet } from 'react-router-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import {clientReducer} from "../reducers/clientReducer"
import Header from './header';

const composeEnhancers = composeWithDevTools();

const globalStore = createStore(clientReducer,composeEnhancers);

function Layout(props){
  return(
    <Provider store={globalStore}>
      <Header />
      <Outlet />
    </Provider> 
  )
}

export default Layout