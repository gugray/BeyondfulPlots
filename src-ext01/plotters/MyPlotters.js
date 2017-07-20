import { SquarePlotter } from "./SquarePlotter"

export default function registerMyPlotters() {
  window.PlotterLibrary.registerPlotter(new SquarePlotter());
}

