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
import PropTypes from 'prop-types'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './css/bootstrap.min.css';
import './css/bootstrap-theme.min.css';
import './css/react-bootstrap-table-all.min.css';
import './css/admTables.css'

const selectRowProp = {
  mode: 'checkbox',
  bgColor: 'pink', // you should give a bgcolor, otherwise, you can't regonize which row has been selected
  hideSelectColumn: false,  // enable hide selection column.
  clickToSelect: true  // you should enable clickToSelect, otherwise, you can't select column.
};



const visTypes = [ 1, 0 ];

class NewsTable extends React.Component {

columnClassNameF(fieldValue, row, rowIdx, colIdx) {
// fieldValue - as is, row - the whole row object, rowIdx, colIdx - cell coords
  let classD='';
  if (Number(row.updating) === 1) {classD='classUpdating';} else {classD='classNotUpdating';}
  if (Number(row.visibility) === 1) {return 'classVis '+classD;}
  else {return 'classInvis '+classD;}
}

  render() {
    return (
      <BootstrapTable data={ this.props.adm_newsData } striped hover bordered={false} selectRow={ selectRowProp } cellEdit={{ mode:'click', blurToSave: true, afterSaveCell: this.props.onCellEdit }}  insertRow={ true } deleteRow={ true } options={ { afterInsertRow:this.props.onClickAdd, insertText: 'Добавить новость', afterDeleteRow:this.props.onClickDel, deleteText: 'Удалить новость'} } >
          <TableHeaderColumn dataField='id' isKey hiddenOnInsert dataAlign='right' autoValue editable={ false }>News item Id</TableHeaderColumn>
          <TableHeaderColumn dataField='hdng' columnClassName={ this.columnClassNameF }>Heading</TableHeaderColumn>
          <TableHeaderColumn dataField='bdy' columnClassName={ this.columnClassNameF } >Body</TableHeaderColumn>
          <TableHeaderColumn dataField='createdon' columnClassName={ this.columnClassNameF } hiddenOnInsert editable={ false }>Creation timestamp</TableHeaderColumn>
          <TableHeaderColumn dataField='visibility' columnClassName={ this.columnClassNameF } dataAlign='right' editable={ { type: 'select', options: { values: visTypes } } }>Show or not</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

NewsTable.propTypes = {
  adm_newsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      hdng: PropTypes.string.isRequired,
      bdy: PropTypes.string.isRequired,
      createdon: PropTypes.string.isRequired, 
      visibility: PropTypes.number.isRequired,
      updating: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
  , onClickAdd: PropTypes.func.isRequired
  , onClickDel: PropTypes.func.isRequired
  , onCellEdit: PropTypes.func.isRequired
}

export default NewsTable
