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
import {adm_actLOAD,actADD,actEDIT,actDEL} from '../actions'

const adm_actData = (state = [], action) => {
 let itm = [], aidx;
 switch(action.type)
 {
  case actADD.REQ:
   return state;

  case actADD.FAIL:
   return state;

  case actADD.OK:
   return state;



  case actEDIT.REQ:
   return state;

  case actEDIT.FAIL:
   return state;

  case actEDIT.OK:
   return state;



  case actEDIT.UPD:
   itm = [...state];
   aidx = itm.findIndex(function(el,idx,arr){return (Number(el.id)===Number(action.id));});
   itm[aidx].updating = action.updating;
//Stupid hack, get rid of it:
   itm[aidx].id = Number(itm[aidx].id);
   itm[aidx].visibility = Number(itm[aidx].visibility);
   return itm;



  case actDEL.REQ:
   return state;

  case actDEL.FAIL:
   return state;

  case actDEL.OK:
   return state;



  case adm_actLOAD.REQ:
   return state;

  case adm_actLOAD.FAIL:
   return state;

  case adm_actLOAD.OK:
   return action.dat;



  default:
   return state;
 }
}

export default adm_actData
