import React from 'react'

class PlotterBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { enabled: false };
    this.onCheckClick = this.onCheckClick.bind(this);
  }
  render() {
    var StgsCtrl = this.props.stgsCtrl;
    var isEnabled = this.state.enabled;
    var checkClass = isEnabled ? "fa fa-check-square-o" : "fa fa-square-o";
    
    return (
      <div className="plotterBox" key={this.props.key}>
        <div className="left">
          <i className={checkClass} onClick={this.onCheckClick}></i>
        </div>
        <div className="right">
          <StgsCtrl />
        </div>
      </div>
    );
  }
  onCheckClick() {
    this.setState({ enabled: !this.state.enabled});
  }
}

export default PlotterBox;
