import React from 'react'

class PlotterBox extends React.Component {
  constructor(props) {
    super(props);
    this.onCheckClick = this.onCheckClick.bind(this);
    this.onParamsChanged = this.onParamsChanged.bind(this);
  }
  render() {
    var StgsCtrl = this.props.stgsCtrl;
    var isEnabled = this.props.enabled;
    var checkClass = isEnabled ? "fa fa-check-square-o" : "fa fa-square-o";
    var checkStyle = {
      color: window.PlotterLibrary.getColor(this.props.plotterid)
    };

    return (
      <div className="plotterBox" key={this.props.key}>
        <div className="left">
          <i className={checkClass} style={checkStyle} onClick={this.onCheckClick}></i>
        </div>
        <div className="right">
          <StgsCtrl params={this.props.plotParams} onParamsChanged={this.onParamsChanged} />
        </div>
      </div>
    );
  }
  onCheckClick() {
    var enabled = !this.props.enabled;
    this.props.onDataChanged(this.props.plotterid, enabled, this.props.plotParams);
  }
  onParamsChanged(params) {
    this.props.onDataChanged(this.props.plotterid, this.props.enabled, params);
  }
}

export default PlotterBox;
