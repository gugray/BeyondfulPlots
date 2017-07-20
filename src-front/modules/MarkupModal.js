import React from 'react'
import ReactDOM from 'react-dom';

class MarkupModal extends React.Component {
  constructor(props) {
    super(props);
    this.onClose = this.onClose.bind(this);
  }
  render() {
    return (
      <div className="popup">
        <div className="header">
          {this.props.title}
          <span className="close" onClick={this.onClose}>X</span>
        </div>
        <div className="content">{this.props.content}</div>
      </div>
    );
  }
  onClose() {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this).parentNode);
  }
}

export default MarkupModal;
