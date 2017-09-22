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

class Price extends React.Component {

  render() {
    return (
      <BootstrapTable data={ this.props.priceData } striped hover>
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

