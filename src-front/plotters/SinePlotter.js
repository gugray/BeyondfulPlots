import { SinePlotterStgsCtrl } from './SinePlotterStgsCtrl'
import { Plugin } from '../ifaces/Plugin.js'

export class SinePlotter extends Plugin {
  constructor() {
    super("sineplotter");
  }

  getControlForContext(context) {
    if (context == "PlotterStgs") {
      return SinePlotterStgsCtrl;
    }
  }
}

