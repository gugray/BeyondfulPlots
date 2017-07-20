import { SinePlotterStgsCtrl } from './SinePlotterStgsCtrl'
import { Plotter } from '../ifaces/Plotter.js'

export class SinePlotter extends Plotter {
  constructor() {
    super("sineplotter");
  }

  getControlForContext(context) {
    if (context == "PlotterStgs") {
      return SinePlotterStgsCtrl;
    }
  }

  getDefaultParams() {
    return { a: 1 };
  }

  getFunction(params) {
    var fun = function(x) {
      return Math.sin(x * Math.PI * params.a);
    };
    return fun;
  }

  getColor() { return "#ff0000"; }
}

