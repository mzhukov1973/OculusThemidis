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
import {adm_abtLOAD,abtADD,abtEDIT,abtDEL} from '../actions'

const adm_abtData = (state = [], action) => {
 let itm = [], aidx;
 switch(action.type)
 {
  case abtADD.REQ:
   return state;

  case abtADD.FAIL:
   return state;

  case abtADD.OK:
   return state;



  case abtEDIT.REQ:
   return state;

  case abtEDIT.FAIL:
   return state;

  case abtEDIT.OK:
   return state;



  case abtEDIT.UPD:
   itm = [...state];
   aidx = itm.findIndex(function(el,idx,arr){return (Number(el.id)===Number(action.id));});
   itm[aidx].updating = action.updating;
//Stupid hack, get rid of it:
   itm[aidx].id = Number(itm[aidx].id);
   itm[aidx].visibility = Number(itm[aidx].visibility);
   return itm;



  case abtDEL.REQ:
   return state;

  case abtDEL.FAIL:
   return state;

  case abtDEL.OK:
   return state;



  case adm_abtLOAD.REQ:
   return state;

  case adm_abtLOAD.FAIL:
   return state;

  case adm_abtLOAD.OK:
   return action.dat;



  default:
   return state;
 }
}

export default adm_abtData
