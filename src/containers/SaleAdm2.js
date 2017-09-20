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
import SaleAdm from '../components/SaleAdm'
import { actADD, actDEL, actEDIT } from'../actions'

const mapStateToProps = ( state ) => {
  return { adm_actData: state.adm_actData };
}

const mapDispatchToProps = (dispatch,ownProps) => 
{
  return {
   onActClickAdd: (row)                    => {dispatch({type:actADD.REQ, 'row':row});}, 
   onActClickDel: (row)                    => {dispatch({type:actDEL.REQ, 'row':row});}, 
   onActCellEdit: (row,cellName,cellValue) => {dispatch({type:actEDIT.REQ,'row':row,'cellName':cellName,'cellValue':cellValue});} 
  }
}

const SaleAdm2 = connect(mapStateToProps,mapDispatchToProps)(SaleAdm);

export default SaleAdm2
