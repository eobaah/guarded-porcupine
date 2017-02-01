const React = require('react')
const { render } = require('react-dom')
import $ from 'jquery'

import App from './components/App.jsx'

render (
  <App />,
  documents.getElementById('mountPoint')
)

$(document).ready( () => {
  $('.container').fadeIn(1200)
})
