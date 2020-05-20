import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Member from './pages/Member'

import NotFoundPage from './pages/NotFoundPage'

import Header from './components/Header'

function App() {
  return (
    <>
      <Router>
        <>
          <Header />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            {/* must be logged in to visit  "/Member" */}
            <Route path="/member">
              <Member />
            </Route>

            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </>
      </Router>
    </>
  )
}

export default App
