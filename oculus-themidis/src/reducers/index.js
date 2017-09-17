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
import { combineReducers } from 'redux'
import priceData from './priceData'
import adm_priceData from './adm_priceData'
import newsData from './newsData'
import adm_newsData from './adm_newsData'
import cntData from './cntData'
import adm_cntData from './adm_cntData'
import abtData from './abtData'
import adm_abtData from './adm_abtData'
//import uiContactsCarousel from './uiContactsCarousel'

const mainReducer = combineReducers({
  priceData, adm_priceData,
  newsData,  adm_newsData,
  cntData,   adm_cntData,
  abtData,   adm_abtData
});

export default mainReducer
