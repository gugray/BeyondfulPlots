import React from 'react'
import Cookies from 'universal-cookie'
import Plot from './Plot'
import PlotterBox from './PlotterBox'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cookies = new Cookies();
    var username = cookies.get("username", { path: '/' });
    if (username === undefined) username = "sailor";

    var plugins = window.PluginRegistry.getControlsForContext("PlotterStgs");

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
          <Plot />
          <div className="plotters">
            {plugins.map(function (plugin, ix) {
              return <PlotterBox key={ix} stgsCtrl={plugin.ctrl} pluginid={plugin.pluginid} />
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
}

export default App;
