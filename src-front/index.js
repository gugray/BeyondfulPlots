import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import PluginRegistry from './PluginRegistry'
import registerDefaultPlotters from './plotters/DefaultPlotters'
import './styles/app.less'

registerDefaultPlotters();

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    {/*
    <Route path="/repos" component={Repos}/>
    <Route path="/about" component={About}/>
    */}
  </Router>
), document.getElementById('app'))
