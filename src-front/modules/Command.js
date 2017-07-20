import React from 'react'

class Command extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  render() {
    return (
      <div className="command" key={this.props.key} onClick={this.onClick}>{this.props.text}</div>
    );
  }
  onClick() {
    this.props.fun();
  }
}

export default Command;
