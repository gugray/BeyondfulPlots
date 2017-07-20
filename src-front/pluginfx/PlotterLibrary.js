import { IPlotterLibrary } from '../ifaces/IPlotterLibrary'

class PlotterLibrary extends IPlotterLibrary {
  constructor() {
    super();
    this._plotters = [];
    if (!window.PlotterLibrary) {
      window.PlotterLibrary = this;
    }
  }

  registerPlotter(plotter) {
    this._plotters.push(plotter);
    this._plotters.sort((x, y) => { return x.plotterid.localeCompare(y.plotterid); });
  }

  getControlsForContext(context) {
    var res = [];
    for (var i = 0; i != this._plotters.length; ++i) {
      var ctrl = this._plotters[i].getControlForContext(context);
      if (ctrl) res.push({
        plotterid: this._plotters[i].plotterid,
        ctrl: ctrl
      });
    }
    return res;
  }

  getDefaultParams(plotterid) {
    for (var i = 0; i != this._plotters.length; ++i) {
      if (this._plotters[i].plotterid != plotterid) continue;
      return this._plotters[i].getDefaultParams();
    }
  }

  getColor(plotterid) {
    for (var i = 0; i != this._plotters.length; ++i) {
      if (this._plotters[i].plotterid != plotterid) continue;
      return this._plotters[i].getColor();
    }    
  }

  getFunAndColor(plotterid, params) {
    for (var i = 0; i != this._plotters.length; ++i) {
      if (this._plotters[i].plotterid != plotterid) continue;
      return {
        fun: this._plotters[i].getFunction(params),
        color: this._plotters[i].getColor()
      }
    }
  }
}

export default new PlotterLibrary();

