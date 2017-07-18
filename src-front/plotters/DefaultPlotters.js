import { SinePlotter } from "./SinePlotter"

export default function registerDefaultPlotters() {
  window.PluginRegistry.registerPlugin(new SinePlotter());
}

