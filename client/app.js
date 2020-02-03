import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import {Navbar} from './components'
import Routes from './routes'
import Cheese from './components/cheeses'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes />
      </div>
      <Switch>
        <Route exact path="/" />
        <Route exact path="cheeses" components={Cheese} />
        {/* <Route path="*" component={NotFound} /> */}
      </Switch>
    </Router>
  )
}

export default App
