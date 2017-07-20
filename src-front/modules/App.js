import React from 'react'
import Cookies from 'universal-cookie'
import Plot from './Plot'
import PlotterBox from './PlotterBox'
import AppData from '../logic/AppData'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onLogoutClick = this.onLogoutClick.bind(this);
    this.onDataChanged = this.onDataChanged.bind(this);
  }

  render() {
    const cookies = new Cookies();
    var username = cookies.get("username", { path: '/' });
    if (username === undefined) username = "sailor";

    var plotters = window.PlotterLibrary.getControlsForContext("PlotterStgs");
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
          </div>
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
}

export default App;
