import React from 'react'

export class SinePlotterStgsCtrl extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeA = this.onChangeA.bind(this);
}
  render() {
    return (
      <div>
        <div className="pluginTitle">Sine</div>
        <div className="pluginParams">
          f(x) = sin(<input
            type="text" maxLength="5"
            value={this.props.params.a} onChange={this.onChangeA} />
          ⋅ π ⋅ x)
        </div>
      </div>
    );
  }
  onChangeA(event) {
    this.props.onParamsChanged({
      a: event.target.value
    });
  }
}


