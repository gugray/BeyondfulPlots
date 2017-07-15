import React from 'react'
import Cookies from 'universal-cookie'
import PluginRegistry from '../sdk/PluginRegistry'
import Plot from './Plot'
import Scissor from './Scissor'
import ScissorCreator from './Scissor'

export default React.createClass({
  render() {
    // var msg = "";
    // for (var i = 0; i != window.PluginRegistry.texts.length; ++i) {
    //   if (msg.length > 0) msg += " ";
    //   msg += window.PluginRegistry.texts[i];
    // }
    // msg += "!";
    const cookies = new Cookies();
    var username = cookies.get("username", { path: '/' });
    if (username === undefined) username = "sailor";
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
        </div>
      </div>
    )
  },

  onLogoutClick() {
    const cookies = new Cookies();
    cookies.remove('username', { path: '/' });
    location.reload();
  }
})

{/* <Scissor />
{window.PluginRegistry.comps.map(function (comp, ix) {
  var x = new comp({ index: ix, key: ix });
  return x.render();
})} */}
