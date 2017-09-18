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
import React from 'react'
import { PropTypes } from 'prop-types'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import './css/bootstrap.min.css';
import './css/bootstrap-theme.min.css';
import './css/react-bootstrap-table-all.min.css';
import './css/admTables.css'

const selectRowProp = {
  mode: 'checkbox',
  bgColor: 'pink', // you should give a bgcolor, otherwise, you can't regonize which row has been selected
  hideSelectColumn: false,   // enable hide selection column.
  clickToSelect: true  // you should enable clickToSelect, otherwise, you can't select column.
};

const visTypes = [ 1, 0 ];

const catTypes = [ 2, 1 ];//A hack! Should get cid list from DB.

class PriceTable extends React.Component {

columnClassNameF(fieldValue, row, rowIdx, colIdx) {
// fieldValue - as is, row - the whole row object, rowIdx, colIdx - cell coords
  let classD='';
  if (Number(row.updating) === 1) {classD='classUpdating';} else {classD='classNotUpdating';}
  if (Number(row.visibility) === 1) {return 'classVis '+classD;}
  else {return 'classInvis '+classD;}
}

  render() {
    return (
      <BootstrapTable data={ this.props.adm_priceData } striped hover bordered={false} selectRow={ selectRowProp } cellEdit={{ mode:'click', blurToSave: true, afterSaveCell: this.props.onCellEdit }}  insertRow={ true } deleteRow={ true } options={ { afterInsertRow:this.props.onClickAdd, insertText: 'Добавить услугу', afterDeleteRow:this.props.onClickDel, deleteText: 'Удалить услугу'} } >
          <TableHeaderColumn dataField='cid' columnClassName={ this.columnClassNameF } editable={ { type: 'select', options: { values: catTypes } } }>Category ID</TableHeaderColumn>
          <TableHeaderColumn dataField='cat_shrt_name' columnClassName={ this.columnClassNameF } editable={ false }>Category short name</TableHeaderColumn>
          <TableHeaderColumn dataField='cat_descr' columnClassName={ this.columnClassNameF } editable={ false }>Category description</TableHeaderColumn>
          <TableHeaderColumn dataField='id' isKey hiddenOnInsert dataAlign='right' autoValue editable={ false }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='shrt_name' columnClassName={ this.columnClassNameF }>Short name</TableHeaderColumn>
          <TableHeaderColumn dataField='descr' columnClassName={ this.columnClassNameF }>Description</TableHeaderColumn>
          <TableHeaderColumn dataField='price_rur' columnClassName={ this.columnClassNameF }>Price, RUR</TableHeaderColumn>
          <TableHeaderColumn dataField='comment' columnClassName={ this.columnClassNameF }>Comment</TableHeaderColumn>
          <TableHeaderColumn dataField='visibility'  columnClassName={ this.columnClassNameF }dataAlign='right' editable={ { type: 'select', options: { values: visTypes } } }>Show or not</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

PriceTable.propTypes = {
  adm_priceData: PropTypes.arrayOf(
    PropTypes.shape({
      cid: PropTypes.number.isRequired,
      cat_shrt_name: PropTypes.string.isRequired,
      cat_descr: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      shrt_name: PropTypes.string.isRequired,
      descr: PropTypes.string.isRequired,
      price_rur: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired, 
      visibility: PropTypes.number.isRequired,
      updating: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
  , onClickAdd: PropTypes.func.isRequired
  , onClickDel: PropTypes.func.isRequired
  , onCellEdit: PropTypes.func.isRequired
}

export default PriceTable
