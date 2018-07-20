import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { hot } from 'react-hot-loader'
import Home from './containers/Home'
import AboutMe from './containers/AboutMe'
import Showcase from './containers/Showcase'
import Blogs from './containers/Blogs'
import Blog from './containers/Blog'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Draft from './containers/Draft'
import reducers from './store/reducers/index'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './store/sagas'
import NoMatch from './containers/NoMatch';

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  const { logger }  = require('redux-logger')
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
        <BrowserRouter>
          <div className="container">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/blogs" component={Blogs} />
              <Route path="/blog/:id" component={Blog} />
              <Route path="/books" component={Showcase} />
              <Route path="/about" component={AboutMe} />
              <Route path="/draft" component={Draft} />
              <Route component={NoMatch} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}



export default hot(module)(App)