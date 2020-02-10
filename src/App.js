import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import List from './components/users/List'
import Edit from './components/users/Edit'
import Add from './components/users/Add'
import Theme from './theme/index'
import StyledNavLink from './shared/components/StyledNavLink'
import Nav from './shared/components/Nav'
import ErrorPage from './components/errors/ErrorPage'
import ErrorBoundary from './components/errors/ErrorBoundary'

const App = () => (
  <ThemeProvider theme={Theme}>
    <Nav className="navbar navbar-expand-lg">
      <StyledNavLink to="/">
        <h3>Team app</h3>
      </StyledNavLink>
    </Nav>
    <div className="container">
      <ErrorBoundary>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/users" />} />
          <Route exact path="/users" component={List} />
          <Route path="/users/create" component={Add} />
          <Route path="/users/:id" component={Edit} />
          <Route path="/error" component={ErrorPage} />
          <Redirect to="/error" />
        </Switch>
      </ErrorBoundary>
    </div>
  </ThemeProvider>
)

export default App
