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
import {priceLOAD} from '../actions'

const priceData = (state = [], action) => {
 switch(action.type)
 {

  case priceLOAD.REQ:
//Display spinner, prices/services state is being fetched...
   return state;

  case priceLOAD.FAIL:
   return state;

  case priceLOAD.OK:
   return action.dat;


  default:
   return state;
 }
}

export default priceData
