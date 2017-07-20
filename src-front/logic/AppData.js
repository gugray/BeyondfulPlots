import { IAppData } from '../ifaces/IAppData'

class AppData extends IAppData {
  constructor() {
    super();

    this._data = [];

    if (!window.AppData) {
      window.AppData = this;
    }
  }

  isEnabled(plotterid) {
    for (var i = 0; i != this._data.length; ++i) {
      if (this._data[i].id == plotterid)
        return this._data[i].enabled;
    }
    return false;
  }

  getParams(plotterid) {
    for (var i = 0; i != this._data.length; ++i) {
      if (this._data[i].id == plotterid)
        return this._data[i].params;
    }
    return null;
  }

  setPlotData(plotterid, enabled, params) {
    for (var i = 0; i != this._data.length; ++i) {
      if (this._data[i].id != plotterid) continue;
      this._data[i].enabled = enabled;
      this._data[i].params = params;
      return;
    }
    // If we're here, no data for plot yet > add to array
    this._data.push({
      id: plotterid,
      enabled: enabled,
      params: params
    });
  }

  getIds() {
    var ids = [];
    for (var i = 0; i != this._data.length; ++i) {
      ids.push(this._data[i].id);
    }
    return ids;
  }

  getEnabledItems() {
    var res = [];
    for (var i = 0; i != this._data.length; ++i) {
      if (!this._data[i].enabled) continue;
      res.push({
        id: this._data[i].id,
        params: this._data[i].params
      });
    }
    return res;
  }

  getAsJSON() {
    return JSON.stringify(this._data, null, 2);
  }
}

export default new AppData();

