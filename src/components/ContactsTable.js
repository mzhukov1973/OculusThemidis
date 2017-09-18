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
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import PropTypes from 'prop-types'
import './css/bootstrap.min.css';
import './css/bootstrap-theme.min.css';
import './css/react-bootstrap-table-all.min.css';
import './css/Contacts.css'


const selectRowProp = {
  mode: 'checkbox',
  bgColor: 'pink', // you should give a bgcolor, otherwise, you can't regonize which row has been selected
  hideSelectColumn: false,  // enable hide selection column.
  clickToSelect: true  // you should enable clickToSelect, otherwise, you can't select column.
}

const visTypes = [ 1, 0 ]

class ContactsTable extends React.Component {

  render() {
    return (
     <div>
      <BootstrapTable data={ this.props.adm_cntData.Intro } striped hover bordered={false} selectRow={ selectRowProp } cellEdit={{ mode:'click', blurToSave: true, afterSaveCell: this.props.onIntroCellEdit }} insertRow={ false } deleteRow={ false } >
          <TableHeaderColumn dataField='id' isKey hiddenOnInsert dataAlign='right' autoValue editable={ false }> - </TableHeaderColumn>
          <TableHeaderColumn dataField='text'>Text</TableHeaderColumn>
      </BootstrapTable>

      <BootstrapTable data={ this.props.adm_cntData.Phn } striped hover bordered={false} selectRow={ selectRowProp } cellEdit={{ mode:'click', blurToSave: true, afterSaveCell: this.props.onPhnCellEdit }}  insertRow={ true } deleteRow={ true } options={{ afterInsertRow: this.props.onPhnClickAdd, insertText: 'Добавить номер телефона', afterDeleteRow: this.props.onPhnClickDel, deleteText: 'Удалить номер телефона' }} >
          <TableHeaderColumn dataField='id' isKey hiddenOnInsert dataAlign='right' autoValue editable={ false }>Item Id</TableHeaderColumn>
          <TableHeaderColumn dataField='last_edit' hiddenOnInsert editable={ false }>Last edit timestamp</TableHeaderColumn>
          <TableHeaderColumn dataField='shrt_name'>Short name</TableHeaderColumn>
          <TableHeaderColumn dataField='comment'>Notes</TableHeaderColumn>
          <TableHeaderColumn dataField='phone_num'>Phone number</TableHeaderColumn>
          <TableHeaderColumn dataField='visibility' dataAlign='right' editable={ { type: 'select', options: { values: visTypes } } }>Show or not</TableHeaderColumn>
      </BootstrapTable>

      <BootstrapTable data={ this.props.adm_cntData.Eml } striped hover bordered={false} selectRow={ selectRowProp } cellEdit={{ mode:'click', blurToSave: true, afterSaveCell: this.props.onEmlCellEdit }}  insertRow={ true } deleteRow={ true } options={ { afterInsertRow:this.props.onEmlClickAdd, insertText: 'Добавить e-mail', afterDeleteRow:this.props.onEmlClickDel, deleteText: 'Удалить e-mail'} } >
          <TableHeaderColumn dataField='id' isKey hiddenOnInsert dataAlign='right' autoValue editable={ false }>Item Id</TableHeaderColumn>
          <TableHeaderColumn dataField='last_edit' hiddenOnInsert editable={ false }>Last edit timestamp</TableHeaderColumn>
          <TableHeaderColumn dataField='shrt_name'>Short name</TableHeaderColumn>
          <TableHeaderColumn dataField='comment'>Notes</TableHeaderColumn>
          <TableHeaderColumn dataField='email'>E-Mail</TableHeaderColumn>
          <TableHeaderColumn dataField='visibility' dataAlign='right' editable={ { type: 'select', options: { values: visTypes } } }>Show or not</TableHeaderColumn>
      </BootstrapTable>

      <BootstrapTable data={ this.props.adm_cntData.Adr } striped hover bordered={false} selectRow={ selectRowProp } cellEdit={{ mode:'click', blurToSave: true, afterSaveCell: this.props.onAdrCellEdit }}  insertRow={ true } deleteRow={ true } options={ { afterInsertRow:this.props.onAdrClickAdd, insertText: 'Добавить адрес', afterDeleteRow:this.props.onAdrClickDel, deleteText: 'Удалить адрес'} } >
          <TableHeaderColumn dataField='id' isKey hiddenOnInsert dataAlign='right' autoValue editable={ false }>Item Id</TableHeaderColumn>
          <TableHeaderColumn dataField='last_edit' hiddenOnInsert editable={ false }>Last edit timestamp</TableHeaderColumn>
          <TableHeaderColumn dataField='shrt_name'>Short name</TableHeaderColumn>
          <TableHeaderColumn dataField='comment'>Notes</TableHeaderColumn>
          <TableHeaderColumn dataField='zipcode'>ZIP code</TableHeaderColumn>
          <TableHeaderColumn dataField='cntry'>Country</TableHeaderColumn>
          <TableHeaderColumn dataField='city'>City</TableHeaderColumn>
          <TableHeaderColumn dataField='str_address'>Street address</TableHeaderColumn>
          <TableHeaderColumn dataField='closest_metro'>Closest Metro St.</TableHeaderColumn>
          <TableHeaderColumn dataField='gps_lat_ymaps'>GPS Yandex Lat</TableHeaderColumn>
          <TableHeaderColumn dataField='gps_lon_ymaps'>GPS Yandex Lon</TableHeaderColumn>
          <TableHeaderColumn dataField='gps_precision_ymaps'>GPS Yandex Precision</TableHeaderColumn>
          <TableHeaderColumn dataField='ymaps_file_scale_1'>Map Image Scale 1</TableHeaderColumn>
          <TableHeaderColumn dataField='ymaps_live_link_scale_1'>Map Yandex Link Scale 1</TableHeaderColumn>
          <TableHeaderColumn dataField='ymaps_file_scale_2'>Map Image Scale 2</TableHeaderColumn>
          <TableHeaderColumn dataField='ymaps_live_link_scale_2'>Map Yandex Link Scale 2</TableHeaderColumn>
          <TableHeaderColumn dataField='bg_image'>Background image</TableHeaderColumn>
          <TableHeaderColumn dataField='general_photo_1'>General photo #1</TableHeaderColumn>
          <TableHeaderColumn dataField='general_photo_2'>General photo #2</TableHeaderColumn>
          <TableHeaderColumn dataField='visibility' dataAlign='right' editable={ { type: 'select', options: { values: visTypes } } }>Show or not</TableHeaderColumn>
      </BootstrapTable>
     </div>
    );
  }
}

ContactsTable.propTypes = 
{
 adm_cntData: PropTypes.shape(
  {
   Intro: PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number.isRequired, text:PropTypes.string.isRequired, updating:PropTypes.number.isRequired}).isRequired).isRequired,
   Phn:   PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number.isRequired, last_edit:PropTypes.string.isRequired, shrt_name:PropTypes.string.isRequired, comment:PropTypes.string.isRequired, phone_num:PropTypes.string.isRequired, visibility:PropTypes.number.isRequired, updating:PropTypes.number.isRequired}).isRequired).isRequired,
   Eml:   PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number.isRequired, last_edit:PropTypes.string.isRequired, shrt_name:PropTypes.string.isRequired, comment:PropTypes.string.isRequired, email:PropTypes.string.isRequired, visibility:PropTypes.number.isRequired, updating:PropTypes.number.isRequired}).isRequired).isRequired,
   Adr:   PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number.isRequired, last_edit:PropTypes.string.isRequired, shrt_name:PropTypes.string.isRequired, comment:PropTypes.string.isRequired, zipcode:PropTypes.string.isRequired, cntry:PropTypes.string.isRequired, city:PropTypes.string.isRequired, str_address:PropTypes.string.isRequired, closest_metro:PropTypes.string.isRequired, gps_lat_ymaps:PropTypes.string.isRequired, gps_lon_ymaps:PropTypes.string.isRequired, gps_precision_ymaps:PropTypes.number.isRequired, ymaps_file_scale_1:PropTypes.string.isRequired, ymaps_live_link_scale_1:PropTypes.string.isRequired, ymaps_file_scale_2:PropTypes.string.isRequired, ymaps_live_link_scale_2:PropTypes.string.isRequired, bg_image:PropTypes.string.isRequired, general_photo_1:PropTypes.string.isRequired, general_photo_2:PropTypes.string.isRequired, visibility:PropTypes.number.isRequired, updating:PropTypes.number.isRequired}).isRequired).isRequired
  }
 ).isRequired
 , onPhnClickAdd:   PropTypes.func.isRequired
 , onPhnClickDel:   PropTypes.func.isRequired
 , onPhnCellEdit:   PropTypes.func.isRequired
 , onEmlClickAdd:   PropTypes.func.isRequired
 , onEmlClickDel:   PropTypes.func.isRequired
 , onEmlCellEdit:   PropTypes.func.isRequired
 , onAdrClickAdd:   PropTypes.func.isRequired
 , onAdrClickDel:   PropTypes.func.isRequired
 , onAdrCellEdit:   PropTypes.func.isRequired
 , onIntroCellEdit: PropTypes.func.isRequired
}

export default ContactsTable

