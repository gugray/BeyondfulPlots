import { IPluginRegistry } from './ifaces/IPluginRegistry'

class PluginRegistry extends IPluginRegistry {
  constructor() {
    super();
    this._plugins = [];
    if (!window.PluginRegistry) {
      window.PluginRegistry = this;
    }
  }

  registerPlugin(plugin) {
    //console.log(plugin);
    this._plugins.push(plugin); 
  }

  getControlsForContext(context) {
    var res = [];
    for (var i = 0; i != this._plugins.length; ++i) {
      var ctrl = this._plugins[i].getControlForContext(context);
      if (ctrl) res.push({
        pluginid: this._plugins[i].pluginid,
        ctrl: ctrl
      });
    }
    return res;
  }
}

export default new PluginRegistry();

