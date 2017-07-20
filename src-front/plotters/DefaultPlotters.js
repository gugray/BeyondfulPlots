import { SinePlotter } from "./SinePlotter"

export default function registerDefaultPlotters() {
  window.PlotterLibrary.registerPlotter(new SinePlotter());
}

