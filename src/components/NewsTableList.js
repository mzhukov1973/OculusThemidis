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
import React from 'react';
import PropTypes from 'prop-types'
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class ListItemCust extends React.Component {

 render() {
  return (
<Paper rounded={true} transitionEnabled={true} zDepth={3}>
          <ListItem
           leftAvatar={<div>
                            <i className="fa fa-info-circle fa-lg "></i>
                            <span className="listSmallText">
                             <br/>{this.props.tstamp.date}
                             <br/>{this.props.tstamp.time}
                            </span>
                       </div>
                      }
           primaryText={this.props.hdng}
           secondaryText={this.props.bdy}
           secondaryTextLines={2}
          />
</Paper>
         );
 }
}


class NewsTableList extends React.Component {

  render() {
    let nD = this.props.newsData;
    let newsItems = nD.map((newsItemData)=>(
     <div className="divInList">
      <ListItemCust 
         hdng={<div className="newsItemPrimaryText">{newsItemData.hdng}</div>}
         bdy={<div className="newsItemSecondaryText">{newsItemData.bdy}</div>}
         tstamp={
                 {
                  date:newsItemData.createdon.split(' ')[0], time:newsItemData.createdon.split(' ')[1].split('.')[0] 
                 }
                }
      />
     </div>
    ));
    return (

  <div>
   <MuiThemeProvider>
      <List>
       {newsItems}
      </List>
   </MuiThemeProvider>
  </div>

    );
  }
}

NewsTableList.propTypes = {
  newsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      hdng: PropTypes.string.isRequired,
      bdy: PropTypes.string.isRequired,
      createdon: PropTypes.string.isRequired, 
      visibility: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
}

export default NewsTableList
