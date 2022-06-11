import React, { Component } from "react";
import GheItem from "./GheItem";
import SoThuTu from "./SoThuTu";

export default class DanhSachHangGhe extends Component {
  render() {
    if (!this.props.data.hang) {
      return (
        <div className="seatCharts-row d-flex justify-content-center ">
          <div className="seatCharts-cell seatCharts-space ">
            {this.props.data.hang}
          </div>
          {this.props.data.danhSachGhe.map((item, i) => {
            return <SoThuTu data={item} key={i} />;
          })}
        </div>
      );
    } else {
      return (
        <div className="seatCharts-row d-flex justify-content-center">
          <div className="seatCharts-cell seatCharts-space">
            {this.props.data.hang}
          </div>
          {this.props.data.danhSachGhe.map((item, i) => {
            return <GheItem key={i} data={item} />;
          })}
        </div>
      );
    }
  }
}
