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
import { connect } from 'react-redux'
import { uiCntCarACT } from'../actions'
import Contacts from '../components/Contacts'

const mapStateToProps = ( state ) => { 
  return { cntData: state.cntData }; 
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
          handleSelect:       (selectedIndex, ev) => {dispatch({type:uiCntCarACT.SEL,   idx:selectedIndex, direction:ev.direction});},
          handleCarItemClick: (ev)                => {dispatch({type:uiCntCarACT.CLICK, idx:Number(ev.target.id.slice(-1))});}
         }
  }

const Contacts2 = connect(mapStateToProps,mapDispatchToProps)(Contacts);

export default Contacts2

