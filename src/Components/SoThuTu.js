import React, { Component } from "react";

export default class SoThuTu extends Component {
  render() {
    return (
      <div className="seatCharts-cell seatCharts-space">
        {this.props.data.soGhe}
      </div>
    );
  }
}
