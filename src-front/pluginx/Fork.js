import React from 'react';

class Fork extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div key={this.props.key}>Fork ({this.props.index})</div>
    );
  }
}

var TheFork = Fork;
export { TheFork }


