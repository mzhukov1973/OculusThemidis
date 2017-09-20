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
import { priceADD, priceDEL, priceEDIT } from'../actions'
import PriceAdm from '../components/PriceAdm'

const mapStateToProps = ( state ) => {
  return {adm_priceData: state.adm_priceData };
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    onClickAdd: (row) => {
     dispatch({type:priceADD.REQ, 'row':row});//Sending PUSH_NEW_PRICE_ITEM_REQUEST action, to be intercepted by Saga watcher
    },
    onClickDel: (row) => {
     dispatch({type:priceDEL.REQ, 'row':row});//Sending DEL_PRICE_ITEM_REQUEST action, to be intercepted by Saga watcher
    },
    onCellEdit: (row,cellName,cellValue) => {
     dispatch({type:priceEDIT.UPD, 'id':row.id, 'updating':1});
     dispatch({type:priceEDIT.REQ,'row':row,'cellName':cellName,'cellValue':cellValue});//Sending EDIT_PRICE_ITEM_REQUEST action, to be intercepted by Saga watcher
    }
  }
}


const PriceAdm2 = connect(mapStateToProps,mapDispatchToProps)(PriceAdm);

export default PriceAdm2
