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
import {adm_priceLOAD,priceADD,priceEDIT,priceDEL} from '../actions'

const adm_priceData = (state = [], action) => {
 let itm = [], aidx;
 switch(action.type)
 {


  case priceADD.REQ:
//Display spinner, price item is being added...
   return state;

  case priceADD.FAIL:
   return state;

  case priceADD.OK:
//New price item has been successfully stored on server, now add the new item to the new state and return it
//     Until single row price loading is implemented, just return old state (first rolling back changes made) 
//   and launch a new saga to reload whole price block anew (this time already containing the new item we've just added to DB).
   return state;



  case priceEDIT.REQ:
//Display spinner, newly edited price item is being stored...
   return state;

  case priceEDIT.FAIL:
   return state;

  case priceEDIT.OK:
//Newly edited price item has been successfully stored on server, now modified the item in the new state accordingly and return it
   return state;



  case priceEDIT.UPD:
   itm = [...state];
   aidx = itm.findIndex(function(el,idx,arr){return (Number(el.id)===Number(action.id));});
   itm[aidx].updating = action.updating;
//Stupid hack, get rid of it:
   itm[aidx].id = Number(itm[aidx].id);
   itm[aidx].cid = Number(itm[aidx].cid);
   itm[aidx].price_rur = Number(itm[aidx].price_rur);
   itm[aidx].visibility = Number(itm[aidx].visibility);
   return itm;



  case priceDEL.REQ:
   return state;

  case priceDEL.FAIL:
   return state;

  case priceDEL.OK:
   return state;



  case adm_priceLOAD.REQ:
//Display spinner, price state is being fetched...
   return state;

  case adm_priceLOAD.FAIL:
   return state;

  case adm_priceLOAD.OK:
   return action.dat;



  default:
   return state;
 }
}

export default adm_priceData
