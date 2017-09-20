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

const selectRowProp = {
  mode: 'checkbox',
  bgColor: 'pink', // you should give a bgcolor, otherwise, you can't regonize which row has been selected
  hideSelectColumn: true,  // enable hide selection column.
  clickToSelect: true  // you should enable clickToSelect, otherwise, you can't select column.
};

/*
function onAfterSaveCell(row, cellName, cellValue) {
  alert(`Save cell ${cellName} with value ${cellValue}`);

  let rowStr = '';
  for (const prop in row) {
    rowStr += prop + ': ' + row[prop] + '\n';
  }

  alert('The whole row :\n' + rowStr);
}
*/
class Price extends React.Component {

// add this to <BootstrapTable ... when dealing with an admin:   cellEdit={{ mode:'click', blurToSave: true, afterSaveCell: this.props.onCellEdit }}  insertRow={ true } options={ { afterInsertRow:this.props.onClick, insertText: 'Добавить позицию'} }
  render() {
    return (
      <BootstrapTable data={ this.props.priceData } striped hover selectRow={ selectRowProp }>
          <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='shrt_name'>Short name</TableHeaderColumn>
          <TableHeaderColumn dataField='price_rur'>Price, RUR</TableHeaderColumn>
          <TableHeaderColumn dataField='comment'>Comment</TableHeaderColumn>
          <TableHeaderColumn dataField='visibility'>Show or not</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

Price.propTypes = {
  priceData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      shrt_name: PropTypes.string.isRequired,
      price_rur: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired, 
      visibility: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
}

export default Price

