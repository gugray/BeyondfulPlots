import { SinePlotter } from "../plotters/SinePlotter"

export function registerDefaultPlotters() {
  window.PlotterLibrary.registerPlotter(new SinePlotter());
}

function sayBoo() {
  alert("Boo!");
}

export function registerDefaultCommands() {
  window.CommandManager.registerCommand("Say boo", sayBoo);
}

