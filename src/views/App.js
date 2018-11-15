import React from 'react';
import { Provider } from 'react-redux';
import Container from './Container'
import TicketList from './Ticket/TicketList'
import TicketDetail from './Ticket/TicketDetail'
import { CSSTransition } from 'react-transition-group'
import store from '../store/index';
import { HashRouter, Route, Switch } from 'react-router-dom';


export default class App extends React.Component {
  
  render() {
    return (
      <Provider store = { store }>
        <HashRouter>
          <div className = "co-Page co-flex co-of">
            <Switch>
            <CSSTransition
              in = { this.props.match !== null }
              classNames = "slide-in"
              timeout = { 300 }
            >
              <Route exact path = "/" component = { Container } />
            </CSSTransition>
            <CSSTransition
              in = { this.props.match !== null }
              classNames = "slide-in"
              timeout = { 300 }
            >
              <Route exact path = "/TicketList" component = { TicketList } />
            </CSSTransition>
            <CSSTransition
              in = { this.props.match !== null }
              classNames = "slide-in"
              timeout = { 300 }
            >
              <Route exact path = "/TicketDetail" component = { TicketDetail } />
            </CSSTransition>
            </Switch>
          </div>
        </HashRouter>
      </Provider>
    )
  }
}