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
}

