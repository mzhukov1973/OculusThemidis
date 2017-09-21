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
import React, { Component } from 'react';
import { Navbar,Nav,NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Switch, Route, Link } from 'react-router-dom'



import News2 from        '../containers/News2'
import NewsAdm2 from     '../containers/NewsAdm2'
import Price2 from       '../containers/Price2'
import PriceAdm2 from    '../containers/PriceAdm2'
import Sale2 from        '../containers/Sale2'
import SaleAdm2 from     '../containers/SaleAdm2'
import About2 from       '../containers/About2'
import AboutAdm2 from    '../containers/AboutAdm2'
import Contacts2 from    '../containers/Contacts2'
import ContactsAdm2 from '../containers/ContactsAdm2'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import PropTypes from 'prop-types';
import './css/bootstrap.min.css';
import './css/bootstrap-theme.min.css';
import './css/react-bootstrap-table-all.min.css';
import './css/App.css';



class Header extends Component {
  render() {
/*className="navbarClass" className="headerClass" className="brandClass"*/
    return (
      <div className="header">
       <MuiThemeProvider>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header className="headerClass">
           <Link to="/">
            <Navbar.Brand className="brandClass">
             <span className="brandSmallFont">Юридическое бюро</span><br/>
             <span className="brandLargeFont">Ваш Поверенный</span>
            </Navbar.Brand>
           </Link>
           <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
             <LinkContainer to="/news"    ><NavItem eventKey={1}>Новости            </NavItem></LinkContainer>
             <LinkContainer to="/price/1" ><NavItem eventKey={2}>Для физических лиц </NavItem></LinkContainer>
             <LinkContainer to="/price/2" ><NavItem eventKey={3}>Для юридических лиц</NavItem></LinkContainer>
             <LinkContainer to="/sale"    ><NavItem eventKey={4}>Акции              </NavItem></LinkContainer>
             <LinkContainer to="/about"   ><NavItem eventKey={5}>О нас              </NavItem></LinkContainer>
             <LinkContainer to="/contacts"><NavItem eventKey={6}>Контакты           </NavItem></LinkContainer>
            </Nav>
{/*
            <Nav pullRight>
             <LinkContainer to="/adm" exact   ><NavItem eventKey={7} >АДМ [Dashboard]    </NavItem></LinkContainer>
             <LinkContainer to="/adm/news"    ><NavItem eventKey={8} >АДМ [Новости]      </NavItem></LinkContainer>
             <LinkContainer to="/adm/price"   ><NavItem eventKey={9} >АДМ [Услуги и Цены]</NavItem></LinkContainer>
             <LinkContainer to="/adm/sale"    ><NavItem eventKey={10}>АДМ [Акции]        </NavItem></LinkContainer>
             <LinkContainer to="/adm/about"   ><NavItem eventKey={11}>АДМ [О нас]        </NavItem></LinkContainer>
             <LinkContainer to="/adm/contacts"><NavItem eventKey={12}>АДМ [Контакты]     </NavItem></LinkContainer>
            </Nav>
*/}
          </Navbar.Collapse>
        </Navbar>
       </MuiThemeProvider>
      </div>
    );
  }
}

class Main extends Component {
  render() {
    return (
      <div className="main">
       <Switch>
        <Route exact path="/"        component={News2}/>
        <Route exact path="/adm"     component={NewsAdm2}/>
        <Route path="/news"          component={News2}/>
        <Route path="/adm/news"      component={NewsAdm2}/>
        <Route exact path="/price"   component={Price2}/>
        <Route path="/price/:number" component={Price2}/>
        <Route path="/adm/price"     component={PriceAdm2}/>
        <Route path="/sale"          component={Sale2}/>
        <Route path="/adm/sale"      component={SaleAdm2}/>
        <Route path="/about"         component={About2}/>
        <Route path="/adm/about"     component={AboutAdm2}/>
        <Route path="/contacts"      component={Contacts2}/>
        <Route path="/adm/contacts"  component={ContactsAdm2}/>
       </Switch>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <Main/>
      </div>
    );
  }
}

export default App
