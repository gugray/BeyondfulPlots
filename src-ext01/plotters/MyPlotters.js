import { SquarePlotter } from "./SquarePlotter"

export default function registerMyPlotters() {
  window.PluginRegistry.registerPlugin(new SquarePlotter());
}

