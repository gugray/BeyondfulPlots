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
    // Axes
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
    // Functions to plot
    for (var i = 0; i != this.props.funs.length; ++i) {
      var funAndColor = window.PlotterLibrary.getFunAndColor(this.props.funs[i].id, this.props.funs[i].params);
      this.paintFun(ctx, cnv.width, cnv.height, funAndColor);
    }
    // Done
    ctx.restore();
  },

  paintFun: function(ctx, w, h, funAndColor) {
    ctx.beginPath();
    ctx.strokeStyle = funAndColor.color;
    for (var cx = 0; cx < w; ++cx) {
      var x = (cx - w / 2) / (w / 2);
      var y = funAndColor.fun(x);
      var cy = h / 2 - y * (h / 2);
      if (cx == 0) ctx.moveTo(cx, cy);
      else ctx.lineTo(cx, cy);
    }
    ctx.stroke();
  },

  render: function () {
    return <canvas width={1200} height={400} />;
  }
})
