import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import Home from './containers/Home'
import AboutMe from './containers/AboutMe'
import Showcase from './containers/Showcase'
import Blogs from './containers/Blogs'
import Blog from './containers/Blog'



class App extends Component {

  static propTypes = {

  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutMe} />
          <Route path="/books" component={Showcase} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/blog/:id" component={Blog} />
        </Switch>
      </BrowserRouter >
    )
  }
}



export default hot(module)(App)