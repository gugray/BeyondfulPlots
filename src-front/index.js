import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import AppData from './logic/AppData'
import registerDefaultPlotters from './plotters/DefaultPlotters'
import './styles/app.less'

registerDefaultPlotters();

render ((
  <App data={window.AppData} />
), document.getElementById('app'))
