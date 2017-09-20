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
import ContactsAdm from '../components/ContactsAdm'
import { cntADD, cntDEL, cntEDIT } from'../actions'

const mapStateToProps = ( state ) => {
  return { adm_cntData: state.adm_cntData };
}

const mapDispatchToProps = (dispatch,ownProps) => 
{
  return {
   onIntroCellEdit:    (row,cellName,cellValue) => {dispatch({type:cntEDIT.Intro.REQ, 'row':row, 'cellName':cellName, 'cellValue':cellValue});},
   onPhnClickAdd:      (row)                    => {dispatch({type:cntADD.Phn.REQ,    'row':row});}, onPhnClickDel: (row) => {dispatch({type:cntDEL.Phn.REQ, 'row':row});}, onPhnCellEdit: (row,cellName,cellValue) => {dispatch({type:cntEDIT.Phn.REQ,'row':row,'cellName':cellName,'cellValue':cellValue});}, 
   onEmlClickAdd:      (row)                    => {dispatch({type:cntADD.Eml.REQ,    'row':row});}, onEmlClickDel: (row) => {dispatch({type:cntDEL.Eml.REQ, 'row':row});}, onEmlCellEdit: (row,cellName,cellValue) => {dispatch({type:cntEDIT.Eml.REQ,'row':row,'cellName':cellName,'cellValue':cellValue});}, 
   onAdrClickAdd:      (row)                    => {dispatch({type:cntADD.Adr.REQ,    'row':row});}, onAdrClickDel: (row) => {dispatch({type:cntDEL.Adr.REQ, 'row':row});}, onAdrCellEdit: (row,cellName,cellValue) => {dispatch({type:cntEDIT.Adr.REQ,'row':row,'cellName':cellName,'cellValue':cellValue});}
  }
}

const ContactsAdm2 = connect(mapStateToProps,mapDispatchToProps)(ContactsAdm);

export default ContactsAdm2
