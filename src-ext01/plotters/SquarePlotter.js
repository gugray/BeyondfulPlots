import { SquarePlotterStgsCtrl } from './SquarePlotterStgsCtrl'
import { Plugin } from '../ifaces/Plugin.js'

export class SquarePlotter extends Plugin {
  constructor() {
    super("squareplotter");
  }

  getControlForContext(context) {
    if (context == "PlotterStgs") {
      return SquarePlotterStgsCtrl;
    }
  }

  getDefaultParams() {
    return { a: 1, b: 1 };
  }

  getFunction(params) {
    var fun = function(x) {
      return (x*params.a) * (x*params.a) * params.b;
    };
    return fun;
  }

  getColor() { return "#b200ff"; }
}

