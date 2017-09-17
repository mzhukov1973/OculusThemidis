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
import { adm_cntLOAD,cntADD,cntDEL,cntEDIT } from '../actions'

const adm_cntData = (state = {}, action) => {
 switch(action.type)
 {
//Add-Edit-Delete actions (for all three tables, via sagas):
  case cntADD.Phn.REQ:
   return state;
  case cntADD.Phn.FAIL:
   return state;
  case cntADD.Phn.OK:
   return state;

  case cntEDIT.Phn.REQ:
   return state;
  case cntEDIT.Phn.FAIL:
   return state;
  case cntEDIT.Phn.OK:
   return state;

  case cntDEL.Phn.REQ:
   return state;
  case cntDEL.Phn.FAIL:
   return state;
  case cntDEL.Phn.OK:
   return state;

  case cntADD.Eml.REQ:
   return state;
  case cntADD.Eml.FAIL:
   return state;
  case cntADD.Eml.OK:
   return state;

  case cntEDIT.Eml.REQ:
   return state;
  case cntEDIT.Eml.FAIL:
   return state;
  case cntEDIT.Eml.OK:
   return state;

  case cntDEL.Eml.REQ:
   return state;
  case cntDEL.Eml.FAIL:
   return state;
  case cntDEL.Eml.OK:
   return state;

  case cntADD.Adr.REQ:
   return state;
  case cntADD.Adr.FAIL:
   return state;
  case cntADD.Adr.OK:
   return state;

  case cntEDIT.Adr.REQ:
   return state;
  case cntEDIT.Adr.FAIL:
   return state;
  case cntEDIT.Adr.OK:
   return state;

  case cntDEL.Adr.REQ:
   return state;
  case cntDEL.Adr.FAIL:
   return state;
  case cntDEL.Adr.OK:
   return state;

  case cntEDIT.Intro.REQ:
   return state;
  case cntEDIT.Intro.FAIL:
   return state;
  case cntEDIT.Intro.OK:
   return state;

//Load actions (all three tables, via sagas):
  case adm_cntLOAD.REQ:
   return state;
  case adm_cntLOAD.FAIL:
   return state;
  case adm_cntLOAD.OK:
   return state;//action.dat;



  default:
   return state;
 }
}

export default adm_cntData
