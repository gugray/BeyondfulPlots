import { IPlotterLibrary } from '../ifaces/IPlotterLibrary'

class PlotterLibrary extends IPlotterLibrary {
  constructor() {
    super();
    this._plotter = [];
    if (!window.PlotterLibrary) {
      window.PlotterLibrary = this;
    }
  }

  registerPlotter(plotter) {
    //console.log(plugin);
    this._plotter.push(plotter); 
  }

  getControlsForContext(context) {
    var res = [];
    for (var i = 0; i != this._plotter.length; ++i) {
      var ctrl = this._plotter[i].getControlForContext(context);
      if (ctrl) res.push({
        pluginid: this._plotter[i].pluginid,
        ctrl: ctrl
      });
    }
    return res;
  }
}

export default new PlotterLibrary();

