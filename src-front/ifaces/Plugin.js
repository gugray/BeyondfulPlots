export class Plugin {
  constructor(pluginid) {
    this._pluginid = pluginid;
  }

  get pluginid() { return this._pluginid; }

  getCotrolForContext(context) { return null; }

  getMenuText() { return null; }
}

