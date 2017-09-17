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
import {adm_newsLOAD,newsADD,newsEDIT,newsDEL} from '../actions'

const adm_newsData = (state = [], action) => {
 let itm = [], aidx;
 switch(action.type)
 {


  case newsADD.REQ:
//Display spinner, news item is being added...
   return state;

  case newsADD.FAIL:
   return state;

  case newsADD.OK:
//New news item has been successfully stored on server, now add the new item to the new state and return it
//     Until single row news loading is implemented, just return old state (first rolling back changes made) 
//   and launch a new saga to reload whole news block anew (this time already containing the new item we've just added to DB).
   return state;



  case newsEDIT.REQ:
   return state;

  case newsEDIT.FAIL:
   return state;

  case newsEDIT.OK:
   return state;



  case newsEDIT.UPD:
   itm = [...state];
   aidx = itm.findIndex(function(el,idx,arr){return (Number(el.id)===Number(action.id));});
   itm[aidx].updating = action.updating;
//Stupid hack, get rid of it:
   itm[aidx].id = Number(itm[aidx].id);
   itm[aidx].visibility = Number(itm[aidx].visibility);
   return itm;



  case newsDEL.REQ:
   return state;

  case newsDEL.FAIL:
   return state;

  case newsDEL.OK:
   return state;



  case adm_newsLOAD.REQ:
//Display spinner, news state is being fetched...
   return state;

  case adm_newsLOAD.FAIL:
   return state;

  case adm_newsLOAD.OK:
   return action.dat;



  default:
   return state;
 }
}

export default adm_newsData
