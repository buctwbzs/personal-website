import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { hot } from 'react-hot-loader'
import Home from './containers/Home'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import reducers from './store/reducers/index'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './store/sagas'
import NoMatch from './containers/NoMatch'

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

sagaMiddleware.run(rootSaga)

class App extends Component {

  static propTypes = {

  }

  render() {
    return (
      <Provider store={store}>
        <div style={{paddingTop: '68px'}}>
          <Header />
          <BrowserRouter basename="/">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={NoMatch} />
            </Switch>
          </BrowserRouter>
          <Footer />
        </div>
      </Provider>
    )
  }
}



export default hot(module)(App)