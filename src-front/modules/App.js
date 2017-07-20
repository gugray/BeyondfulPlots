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

    var plotters = window.PlotterLibrary.getControlsForContext("PlotterStgs");

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
            {plotters.map(function (plotter, ix) {
              return <PlotterBox key={ix} stgsCtrl={plotter.ctrl} pluginid={plotter.plotterid} />
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
