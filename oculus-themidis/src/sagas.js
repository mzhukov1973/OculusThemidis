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

import { put, takeEvery, all, call } from 'redux-saga/effects'
import { priceLOAD, adm_priceLOAD, priceADD, priceEDIT, priceDEL } from './actions'
import { newsLOAD, adm_newsLOAD, newsADD, newsEDIT, newsDEL } from './actions'



//===============AJAX functions here==========================================
const DoJSONLoad = (method = 'normal', action = 'get_nonexistant', record = -1)=>
{
 let myHeaders = new Headers({"Content-type":"application/x-www-form-urlencoded"});
 let myRequest = new Request
                 ('https://testbed2.cloud.tilaa.com:5000/ajax_fetch.php', 
                  {method: 'POST', headers: myHeaders, body: 'action='+action+'&method='+method+'&record='+record}
                 );
 return fetch(myRequest).then(response => (response.json()) );
};

const DoJSONStore = (action = 'nonexistant', item)=>
{
 let myHeaders = new Headers({"Content-type":"application/x-www-form-urlencoded"});
 let myRequest = new Request
                 ('https://testbed2.cloud.tilaa.com:5000/ajax_store.php', 
                  {method: 'POST', headers: myHeaders, body: 'action='+action+'&item='+JSON.stringify(item)}
                 );
 return fetch(myRequest).then(response => (response.json()) );
};
//============================================================================




//================News related sagas==========================================
//----------------------------------------------------------------------NEWS LOAD ALL:
export function* loadNewsWhole() 
{
 try {
      const data = yield call(DoJSONLoad,'normal','get_news',-1)
      yield put({type: newsLOAD.OK, dat:data.data})
     } 
 catch (error) 
     { 
      yield put({type: newsLOAD.FAIL, err: error}); 
     }
}
export function* watchLoadNewsWholeRequest() {
  yield takeEvery(newsLOAD.REQ, loadNewsWhole)
}
//----------------------------------------------------------------------NEWS ADM LOAD ALL:
export function* adm_loadNewsWhole() 
{
 try {
      const data = yield call(DoJSONLoad,'adm','get_news',-1)
      yield put({type: adm_newsLOAD.OK, dat:data.data})
     } 
 catch (error) 
     { 
      yield put({type: adm_newsLOAD.FAIL, err: error}); 
     }
}
export function* watch_adm_LoadNewsWholeRequest() {
  yield takeEvery(adm_newsLOAD.REQ, adm_loadNewsWhole)
}
//----------------------------------------------------------------------NEWS ADD ITEM:
export function* addNewsItem(action) 
{
 try {
      const data = yield call(DoJSONStore,'add_news_item',action.row)
      yield put({type: newsADD.OK, dat:data.data})//At this point data is a one-element array containing the following object: {id:453} (453 being the actual integer)
      yield put({type: adm_newsLOAD.REQ}) //Request reloading of the updated admin news table
      yield put({type: newsLOAD.REQ}) //Request reloading of the updated user news table
     } 
 catch (error) 
     { 
      yield put({type: newsADD.FAIL, err: error}); 
     }
}
export function* watchAddNewsItemRequest() {
  yield takeEvery(newsADD.REQ, addNewsItem)
}
//----------------------------------------------------------------------NEWS DEL ITEM:
export function* delNewsItem(action) 
{
 try {
      const data = yield call(DoJSONStore,'del_news_item',action.row)
      yield put({type: newsDEL.OK, dat:data.data})
      yield put({type: adm_newsLOAD.REQ}) //Request reloading of the updated admin news table
      yield put({type: newsLOAD.REQ}) //Request reloading of the updated user news table
     } 
 catch (error) 
     { 
      yield put({type: newsDEL.FAIL, err: error}); 
     }
}
export function* watchDelNewsItemRequest() {
  yield takeEvery(newsDEL.REQ, delNewsItem)
}
//----------------------------------------------------------------------NEWS EDIT ITEM:

export function* editNewsItem(action) 
{
 try {
      let row_ext = Object.assign({}, action.row, {'cellName':action.cellName,'cellValue':action.cellValue});
      const data = yield call(DoJSONStore,'edit_news_item',row_ext)
      yield put({type: newsEDIT.UPD, 'id':action.row.id, 'updating':0})
      yield put({type: newsEDIT.OK, dat:data.data})
      yield put({type: adm_newsLOAD.REQ}) //Request reloading of the updated admin news table
      yield put({type: newsLOAD.REQ}) //Request reloading of the updated user news table
     } 
 catch (error) 
     { 
      yield put({type: newsEDIT.UPD, 'id':action.row.id, 'updating':0});//Stops updaing spinner for the row. In case of success it gets stopped by adm_newsLOAD.OK     
      yield put({type: newsEDIT.FAIL, err: error}); 
     }
}
export function* watchEditNewsItemRequest() {
  yield takeEvery(newsEDIT.REQ, editNewsItem)
}

//----------------------------------------------------------------------
//============================================================================




//=====================Price related sagas====================================
//----------------------------------------------------------------------PRICE LOAD ALL:
export function* loadPriceWhole() 
{
 try {
      const data = yield call(DoJSONLoad,'normal','get_price',-1)
      yield put({type: priceLOAD.OK, dat:data.data})
     } 
 catch (error) 
     { 
      yield put({type: priceLOAD.FAIL, err: error}); 
     }
}
export function* watchLoadPriceWholeRequest() {
  yield takeEvery(priceLOAD.REQ, loadPriceWhole)
}
//----------------------------------------------------------------------PRICE ADM LOAD ALL:
export function* adm_loadPriceWhole() 
{
 try {
      const data = yield call(DoJSONLoad,'adm','get_price',-1)
      yield put({type: adm_priceLOAD.OK, dat:data.data})
     } 
 catch (error) 
     { 
      yield put({type: adm_priceLOAD.FAIL, err: error}); 
     }
}
export function* watch_adm_LoadPriceWholeRequest() {
  yield takeEvery(adm_priceLOAD.REQ, adm_loadPriceWhole)
}
//----------------------------------------------------------------------PRICE ADD ITEM:
export function* addPriceItem(action) 
{
 try {
      const data = yield call(DoJSONStore,'add_price_item',action.row)
      yield put({type: priceADD.OK, dat:data.data})//At this point data is a one-element array containing the following object: {id:453} (453 being the actual integer)
      yield put({type: adm_priceLOAD.REQ}) //Request reloading of the updated admin price table
      yield put({type: priceLOAD.REQ}) //Request reloading of the updated user price table
     } 
 catch (error) 
     { 
      yield put({type: priceADD.FAIL, err: error}); 
     }
}
export function* watchAddPriceItemRequest() {
  yield takeEvery(priceADD.REQ, addPriceItem)
}
//----------------------------------------------------------------------PRICE DEL ITEM:
export function* delPriceItem(action) 
{
 try {
      const data = yield call(DoJSONStore,'del_price_item',action.row)
      yield put({type: priceDEL.OK, dat:data.data})
      yield put({type: adm_priceLOAD.REQ}) //Request reloading of the updated admin price table
      yield put({type: priceLOAD.REQ}) //Request reloading of the updated user price table
     } 
 catch (error) 
     { 
      yield put({type: priceDEL.FAIL, err: error}); 
     }
}
export function* watchDelPriceItemRequest() {
  yield takeEvery(priceDEL.REQ, delPriceItem)
}
//----------------------------------------------------------------------PRICE EDIT ITEM:
export function* editPriceItem(action) 
{
 try {
      let row_ext = Object.assign({}, action.row, {'cellName':action.cellName,'cellValue':action.cellValue});
      const data = yield call(DoJSONStore,'edit_price_item',row_ext)
      yield put({type: priceEDIT.UPD, 'id':action.row.id, 'updating':0})
      yield put({type: priceEDIT.OK, dat:data.data})
      yield put({type: adm_priceLOAD.REQ}) //Request reloading of the updated admin price table
      yield put({type: priceLOAD.REQ}) //Request reloading of the updated user price table
     } 
 catch (error) 
     { 
      yield put({type: priceEDIT.UPD, 'id':action.row.id, 'updating':0})
      yield put({type: priceEDIT.FAIL, err: error}); 
     }
}
export function* watchEditPriceItemRequest() {
  yield takeEvery(priceEDIT.REQ, editPriceItem)
}
//----------------------------------------------------------------------




//============================================================================








//Single entry point to start all sagas at once:
export default function* rootSaga() {
  yield all([
    watchLoadNewsWholeRequest(),
    watch_adm_LoadNewsWholeRequest(),
    watchAddNewsItemRequest(),
    watchDelNewsItemRequest(),
    watchEditNewsItemRequest(),
    watchLoadPriceWholeRequest(),
    watch_adm_LoadPriceWholeRequest(),
    watchAddPriceItemRequest(),
    watchDelPriceItemRequest(),
    watchEditPriceItemRequest()
  ])
}
