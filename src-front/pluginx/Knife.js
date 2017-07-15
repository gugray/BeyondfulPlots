import React from 'react';

class Knife extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div key={this.props.key}>Knife ({this.props.index})</div>
    );
  }
}

var TheKnife = Knife;
export { TheKnife }


