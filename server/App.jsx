import React, { Component } from 'react'
import { StaticRouter, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'
import Header from '../client/components/common/Header'
import Footer from '../client/components/common/Footer'
import Home from '../client/containers/Home.jsx'
import NoMatch from '../client/containers/NoMatch.jsx'

/* 
const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger')
  middlewares.push(logger)
}

const store = createStore(
  reducers,
  applyMiddleware(...middlewares)
)

sagaMiddleware.run(rootSaga) */

class App extends Component {

  static propTypes = {
    location: PropTypes.string.isRequired
  }

  render() {
    return (
      <div style={{ paddingTop: '68px', width: '100%', maxWidth: '100%' }}>
        <Header />
        <StaticRouter
          context={{}}
          location={this.props.location}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NoMatch} />
          </Switch>
        </StaticRouter>
        <Footer />
      </div>
    )
  }
}



export default hot(module)(App)

