import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import AppData from './logic/AppData'
import { registerDefaultPlotters } from './logic/AppInit'
import { registerDefaultCommands } from './logic/AppInit'
import './styles/app.less'

registerDefaultPlotters();
registerDefaultCommands();

render ((
  <App data={window.AppData} />
), document.getElementById('app'))
