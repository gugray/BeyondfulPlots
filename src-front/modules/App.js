import React from 'react'
import { Link } from 'react-router'
import PluginRegistry from '../sdk/PluginRegistry'
import Scissor from './Scissor'
import ScissorCreator from './Scissor'

export default React.createClass({
  render() {
    var msg = "";
    for (var i = 0; i != window.PluginRegistry.texts.length; ++i) {
      if (msg.length > 0) msg += " ";
      msg += window.PluginRegistry.texts[i];
    }
    msg += "!";
    return (
      <div>
        <h1>React {msg}</h1>
        <ul role="nav">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/repos">Repos</Link></li>
        </ul>
        <Scissor />
        {window.PluginRegistry.comps.map(function (comp, ix) {
          var x = new comp({ index: ix, key: ix });
          return x.render();
        })}
      </div>
    )
  }
})