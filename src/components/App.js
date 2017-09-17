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
import PriceTableList2Sec from '../containers/PriceTableList2Sec'
import NewsTableList2Sec from '../containers/NewsTableList2Sec'
import NewsTable2 from '../containers/NewsTable2'
import PriceTable2 from '../containers/PriceTable2'
import Sale from '../components/Sale'
import Contacts2 from '../containers/Contacts2'
import ContactsTable2 from '../containers/ContactsTable2'
import About2 from '../containers/About2'
import About_adm2 from '../containers/About_adm2'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import PropTypes from 'prop-types';
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
 <Route exact path="/"        component={NewsTableList2Sec}/>
 <Route path="/news"          component={NewsTableList2Sec}/>
 <Route path="/adm/news"      component={NewsTable2}/>
 <Route path="/adm/price"     component={PriceTable2}/>
 <Route path="/adm/about"     component={About_adm2}/>
 <Route path="/about"         component={About2}/>
 <Route path="/adm/contacts"  component={ContactsTable2}/>
 <Route path="/contacts"      component={Contacts2}/>
 <Route exact path="/price"   component={PriceTableList2Sec}/>
 <Route path="/price/:number" component={PriceTableList2Sec}/>
 <Route path="/sale"          component={Sale}/>
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
