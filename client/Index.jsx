import React from 'react'
import { render } from 'react-dom'
import 'whatwg-fetch'
import 'es6-promise'
import App from './App'
import 'normalize.css'
import 'draft-js/dist/Draft.css'
import './index.scss'


render(<App />, document.getElementById('app'))