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
}

