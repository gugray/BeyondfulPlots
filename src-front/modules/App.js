import React from 'react'
import ReactDOM from 'react-dom';
import Cookies from 'universal-cookie'
import Plot from './Plot'
import PlotterBox from './PlotterBox'
import Command from './Command'
import AppData from '../logic/AppData'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onLogoutClick = this.onLogoutClick.bind(this);
    this.onDataChanged = this.onDataChanged.bind(this);
    this.onShowMarkup = this.onShowMarkup.bind(this);
  }

  render() {
    const cookies = new Cookies();
    var username = cookies.get("username", { path: '/' });
    if (username === undefined) username = "sailor";

    var plotters = window.PlotterLibrary.getControlsForContext("PlotterStgs");
    var commands = window.CommandManager.getCommands();
    var self = this;

    return (
      <div>
        <div className="header">
          <div className="hdr-beyondful">beyondful</div>
          <div className="hdr-stretch">
            <div className="hdr-plots">
              <div className="hdr-plots-brand">plots</div>
              <div className="hdr-welcome">Welcome, <span className="userName">{username}</span>!</div>
              <i className="fa fa-sign-out hdr-signout" onClick={this.onLogoutClick}></i>
            </div>
          </div>
        </div>
        <div className="content">
          <Plot funs={this.props.data.getEnabledItems()} />
          <div className="plotters">
            <h2>Plotters</h2>
            {plotters.map(function (plotter, ix) {
              var enabled = self.props.data.isEnabled(plotter.plotterid);
              var plotParams = self.props.data.getParams(plotter.plotterid);
              if (!plotParams) plotParams = window.PlotterLibrary.getDefaultParams(plotter.plotterid);
              return <PlotterBox
                key={ix} stgsCtrl={plotter.ctrl} plotterid={plotter.plotterid}
                enabled={enabled} plotParams={plotParams} onDataChanged={self.onDataChanged}
              />
            })}
          </div>
          <div className="menu">
            <h2>Commands</h2>
            {commands.map(function (cmd, ix) {
              return <Command key={ix} text={cmd.text} fun={cmd.fun} />
            })}
          </div>
          <div id="popupHost"></div>
        </div>
      </div>
    )
  }

  onLogoutClick() {
    const cookies = new Cookies();
    cookies.remove('username', { path: '/' });
    location.reload();
  }

  onDataChanged(plotterid, enabled, params) {
    window.AppData.setPlotData(plotterid, enabled, params);
    this.forceUpdate();
  }

  onShowMarkup(plotterid, enabled, params) {
    ReactDOM.render(
      <MarkupModal title="Plotted data as markup" content={this.props.data.getAsJSON()} />
    , document.getElementById('popupHost'));
  }
}

export default App;
