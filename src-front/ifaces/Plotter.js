export class Plotter {
  constructor(plotterid) {
    this._plotterid = plotterid;
  }

  get plotterid() { return this._plotterid; }

  getCotrolForContext(context) { return null; }

  getMenuText() { return null; }
}

