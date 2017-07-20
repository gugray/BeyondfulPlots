import React from 'react'

export class SquarePlotterStgsCtrl extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeA = this.onChangeA.bind(this);
    this.onChangeB = this.onChangeB.bind(this);
 }
  render() {
    return (
      <div>
        <div className="pluginTitle">Square</div>
        <div className="pluginParams">
          f(x) = (x ⋅ <input
            type="text" maxLength="5"
            value={this.props.params.a} onChange={this.onChangeA} />
          ^ 2) ⋅ <input
            type="text" maxLength="5"
            value={this.props.params.b} onChange={this.onChangeB} />
        </div>
      </div>
    );
  }
  onChangeA(event) {
    this.props.onParamsChanged({
      a: event.target.value,
      b: this.props.params.b,
    });
  }
  onChangeB(event) {
    this.props.onParamsChanged({
      a: this.props.params.a,
      b: event.target.value,
    });
  }
}


