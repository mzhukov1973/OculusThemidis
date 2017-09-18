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
import {ResponsiveEmbed,Carousel} from 'react-bootstrap';
import PropTypes from 'prop-types';
import './css/bootstrap.min.css';
import './css/bootstrap-theme.min.css';
import './css/Contacts.css';

const carousel_options = {
                          controls:true,
                          indicators:true,
                          interval:null,
                          defaultActiveIndex:0,
                          nextLabel:null,
                          prevLabel:null,
                          slide:true,
                          wrap:true
                         };
const carousel_item_options = {
                               animateIn:false,
                               animateOut:false
                              };
const paper_options = {
                       rounded:true,
                       zDepth:3,
                       transitionEnabled:true
                      };


class Contacts extends React.Component {

  render() {
    return (
<MuiThemeProvider>
          <div className="saleClass">

           <Paper className="contactsItem" {...paper_options}>
            <h1>Контакты</h1>
            <p> Телефоны, адреса, Яндекс- и Google-карты.</p>
            <br/>
           </Paper>

           <Paper className="contactsItem" {...paper_options}>
            Все начинается с консультации . Вы можете подъехать к нам в офис и наши юристы, внимательно выслушав вас, дадут Вам развернутую консультацию. Так же Вы можете получить консультацию по телефону (адреса и телефоны указаны ниже) Если не сможем ответить, то обязательно перезвоним.
           </Paper>

           <Paper className="contactsItem" {...paper_options}>
            Телефоны: 8 (499) 391-06-72 (73; 74) 8-925-391-06-72 (73; 74)
            e-mail: vashpoverenyi@rambler.ru;
           </Paper>

           <Paper className="contactsItem" {...paper_options}>
            <Carousel {...carousel_options} onSelect={this.props.handleSelect}>
             <Carousel.Item {...carousel_item_options} index={0} id={'cntct_item0'}>
              <Carousel.Caption className="carouselCaption">
               <h3>Первый адрес</h3>
               <p>Проспект Мира, д.102, корп.1, 2-ой этаж. (м.Алексеевская)</p>
              </Carousel.Caption>
              <div className="center-block mapEmbeds">
               <ResponsiveEmbed a4by3 onClick={this.props.handleCarItemClick} id={'cntct_item_respembed0'} className="embedImg">
                <embed type="image/jpeg" src="/images/contacts_address0.jpg" />
               </ResponsiveEmbed>
              </div>
             </Carousel.Item>
             <Carousel.Item {...carousel_item_options} index={1} id={'cntct_item1'}>
              <Carousel.Caption className="carouselCaption">
               <h3>Второй адрес</h3>
               <p>Каширский проезд, д.7, оф.3 (м.Варшавская)</p>
              </Carousel.Caption>
              <div className="center-block mapEmbeds">
               <ResponsiveEmbed a4by3 onClick={this.props.handleCarItemClick} id={'cntct_item_respembed1'} className="embedImg">
                <embed type="image/jpeg" src="/images/contacts_address1.jpg" />
               </ResponsiveEmbed>
              </div>
             </Carousel.Item>
             <Carousel.Item {...carousel_item_options} index={2} id={'cntct_item2'}>
              <Carousel.Caption className="carouselCaption">
               <h3>Третий адрес</h3>
               <p>Москва, ул.Каланчевская, д.20/7 (м.Комсомольская)</p>
              </Carousel.Caption>
              <div className="center-block mapEmbeds">
               <ResponsiveEmbed a4by3 onClick={this.props.handleCarItemClick} id={'cntct_item_respembed2'} className="embedImg">
                <embed type="image/jpeg" src="/images/contacts_address2.jpg" />
               </ResponsiveEmbed>
              </div>
             </Carousel.Item>
            </Carousel>
           </Paper>

          </div>
</MuiThemeProvider>
    );
  }
}

Contacts.propTypes = 
{
 cntData: PropTypes.shape(
  {
   uiContactsCarousel:PropTypes.shape({idx:PropTypes.number.isRequired, direction:PropTypes.string.isRequired}).isRequired,
   Intro: PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number.isRequired, text:PropTypes.string.isRequired}).isRequired).isRequired,
   Phn:   PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number.isRequired, last_edit:PropTypes.string.isRequired, shrt_name:PropTypes.string.isRequired, comment:PropTypes.string.isRequired, phone_num:PropTypes.string.isRequired, visibility:PropTypes.number.isRequired}).isRequired).isRequired,
   Eml:   PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number.isRequired, last_edit:PropTypes.string.isRequired, shrt_name:PropTypes.string.isRequired, comment:PropTypes.string.isRequired, email:PropTypes.string.isRequired, visibility:PropTypes.number.isRequired}).isRequired).isRequired,
   Adr:   PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number.isRequired, last_edit:PropTypes.string.isRequired, shrt_name:PropTypes.string.isRequired, comment:PropTypes.string.isRequired, zipcode:PropTypes.string.isRequired, cntry:PropTypes.string.isRequired, city:PropTypes.string.isRequired, str_address:PropTypes.string.isRequired, closest_metro:PropTypes.string.isRequired, gps_lat_ymaps:PropTypes.string.isRequired, gps_lon_ymaps:PropTypes.string.isRequired, gps_precision_ymaps:PropTypes.number.isRequired, ymaps_file_scale_1:PropTypes.string.isRequired, ymaps_live_link_scale_1:PropTypes.string.isRequired, ymaps_file_scale_2:PropTypes.string.isRequired, ymaps_live_link_scale_2:PropTypes.string.isRequired, bg_image:PropTypes.string.isRequired, general_photo_1:PropTypes.string.isRequired, general_photo_2:PropTypes.string.isRequired, visibility:PropTypes.number.isRequired}).isRequired).isRequired
  }
 ).isRequired
 , handleSelect:       PropTypes.func.isRequired
 , handleCarItemClick: PropTypes.func.isRequired
}


export default Contacts
