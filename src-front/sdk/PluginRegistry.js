class PluginRegistry {
  constructor() {
    this._texts = [];
    this._comps = [];
    if (!window.PluginRegistry) {
      window.PluginRegistry = this;
    }
  }

  registerText(text) { this._texts.push(text); }
  get texts() { return this._texts; }
  registerComp(comp) { 
    //console.log("Comp registered: " + comp.toString());
    this._comps.push(comp); 
  }
  get comps() { return this._comps; }
}

export default new PluginRegistry();
