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
import { Navbar,Nav,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';
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
    return (
      <div className="header">
<MuiThemeProvider>
 <Navbar className="navbarClass">
    <Navbar.Header className="headerClass">
      <Navbar.Brand className="brandClass">
        <Link to="/"><span className="brandSmallFont">Юридическое бюро</span><br/><span className="brandLargeFont">Ваш Поверенный</span></Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1}><Link to="/news">Новости</Link></NavItem>
       <NavDropdown eventKey={2} title="Услуги и Цены" id="basic-nav-dropdown">
        <MenuItem eventKey={2.1}><Link to="/price/1">Для физических лиц</Link></MenuItem>
        <MenuItem eventKey={2.2}><Link to="/price/2">Для юридических лиц</Link></MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={2.3}><Link to="/price">Весь прайс-лист</Link></MenuItem>
      </NavDropdown>
      <NavItem eventKey={3}><Link to="/sale">Акции</Link></NavItem>
       <NavDropdown eventKey={4} title="О компании" id="basic-nav-dropdown">
        <MenuItem eventKey={4.1}><Link to="/about">О нас</Link></MenuItem>
        <MenuItem eventKey={4.2}><Link to="/contacts">Контакты</Link></MenuItem>
      </NavDropdown>
      <NavItem eventKey={5}><Link to="/adm/news">АДМ [Новости]</Link></NavItem>
      <NavItem eventKey={6}><Link to="/adm/price">АДМ [Услуги и Цены]</Link></NavItem>
      <NavItem eventKey={7}><Link to="/adm/about">АДМ [О нас]</Link></NavItem>
      <NavItem eventKey={8}><Link to="/adm/contacts">АДМ [Контакты]</Link></NavItem>
    </Nav>
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
