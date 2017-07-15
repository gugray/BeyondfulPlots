import React from 'react'

export default React.createClass({
  componentDidMount: function () {
    var cnv = this.getDOMNode();
    this.paint(cnv);
  },

  componentDidUpdate: function () {
    var cnv = this.getDOMNode();
    this.paint(cnv);
  },

  paint: function (cnv) {
    var ctx = cnv.getContext('2d');
    ctx.save();
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(0, cnv.height / 2);
    ctx.lineTo(cnv.width, cnv.height / 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cnv.width / 2, 0);
    ctx.lineTo(cnv.width / 2, cnv.height);
    ctx.stroke();
    ctx.restore();
  },

  render: function () {
    return <canvas width={1200} height={400} />;
  }
})
