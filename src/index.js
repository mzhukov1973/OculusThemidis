/*===========================================================================*/
/*  Copyright 2017 Maxim Zhukov                                              */
/*                                                                           */
/*  Licensed under the Apache License, Version 2.0 (the "License");          */
/*  you may not use this file except in compliance with the License.         */
/*  You may obtain a copy of the License at                                  */
/*                                                                           */
/*      http://www.apache.org/licenses/LICENSE-2.0                           */
/*                                                                           */
/*  Unless required by applicable law or agreed to in writing, software      */
/*  distributed under the License is distributed on an "AS IS" BASIS,        */
/*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. */
/*  See the License for the specific language governing permissions and      */
/*  limitations under the License.                                           */
/*===========================================================================*/
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import mainReducer from './reducers';
import App from './components/App';
import * as initialStates from './modules/initialStates'
import './index.css';

const initialState = {
                      newsData:      initialStates.news,
                      adm_newsData:  initialStates.adm_news,
                      priceData:     initialStates.products,
                      adm_priceData: initialStates.adm_products,
                      actData:       initialStates.sale,
                      adm_actData:   initialStates.adm_sale,
                      abtData:       initialStates.about,
                      adm_abtData:   initialStates.adm_about,
                      cntData:       initialStates.cnt,
                      adm_cntData:   initialStates.adm_cnt
                     };

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
                        mainReducer,
                        initialState, 
                        compose (
                                 applyMiddleware(sagaMiddleware)
/*                                 , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() */
                                )
                       );

sagaMiddleware.run(rootSaga);

//====================
store.dispatch({type:'LOAD_NEWS_WHOLE_REQUEST'});
store.dispatch({type:'LOAD_CONTACTS_WHOLE_REQUEST'});
store.dispatch({type:'LOAD_PRICE_WHOLE_REQUEST'});//Have to do it in parallel!! 
// if (adm) {
store.dispatch({type:'LOAD_ADM_CONTACTS_WHOLE_REQUEST'});
store.dispatch({type:'LOAD_ADM_NEWS_WHOLE_REQUEST'});
store.dispatch({type:'LOAD_ADM_PRICE_WHOLE_REQUEST'});//Have to do it in parallel!! 
//}
//====================

render(
     <BrowserRouter basename="/oculus-themidis">
      <Provider store={store}>
       <App/>
      </Provider>
     </BrowserRouter>,
  document.getElementById('root')
);

