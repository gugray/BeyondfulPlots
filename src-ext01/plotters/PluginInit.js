import React from 'react'
import ReactDOM from 'react-dom';
import { SquarePlotter } from "./SquarePlotter"
import MarkupModal from '../modules/MarkupModal'

export function registerMyPlotters() {
  window.PlotterLibrary.registerPlotter(new SquarePlotter());
}

function showMarkup() {
  var markup = window.AppData.getAsJSON();
  ReactDOM.render(
    <MarkupModal title="Plotted data as markup" content={markup} />
  , document.getElementById('popupHost'));
}

export function registerMyCommands() {
  window.CommandManager.registerCommand("Show markup", showMarkup);
}

