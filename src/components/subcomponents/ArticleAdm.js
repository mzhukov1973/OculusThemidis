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
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';

class ArticleAdm extends React.Component {

  render() {
    return (
          <MuiThemeProvider>
           <Paper rounded={true} zDepth={3} transitionEnabled={true}>
            <h1>{this.props.articleData.hdng}</h1>
            <p>{this.props.articleData.subhdng}</p>
            <br/>
            {this.props.articleData.bg}<br/>
            {this.props.articleData.pic}<br/>
            {this.props.articleData.bdy}
           </Paper>
          </MuiThemeProvider>
);
  }
}

ArticleAdm.propTypes = 
{
 articleData: PropTypes.shape({
              id:         PropTypes.number.isRequired, 
              last_edit:  PropTypes.string.isRequired, 
              hdng:       PropTypes.string.isRequired, 
              subhdng:    PropTypes.string.isRequired, 
              bdy:        PropTypes.string.isRequired, 
              pic:        PropTypes.string.isRequired, 
              bg:         PropTypes.string.isRequired, 
              visibility: PropTypes.number.isRequired,
              updating: PropTypes.number.isRequired}).isRequired
}

export default ArticleAdm
