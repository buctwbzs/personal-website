import React from 'react'
import { render } from 'react-dom'
import 'whatwg-fetch'
import 'es6-promise'
import App from './App'
import './styles/index.scss'


render(<App />, document.getElementById('app'))