import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import Home from '../client/containers/Home'
import Header from '../client/components/common/Header'
import Footer from '../client/components/common/Footer'
import NoMatch from '../client/containers/NoMatch'
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

  render() {
    return (
      <div style={{ paddingTop: '68px', width: '100%', maxWidth: '100%' }}>
        <Header />
        <BrowserRouter basename="/">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    )
  }
}



export default hot(module)(App)

