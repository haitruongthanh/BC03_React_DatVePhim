import React, { Component } from "react";
import { connect } from "react-redux";
import DanhSachHangGhe from "./DanhSachHangGhe";

class DanhSachGhe extends Component {
  render() {
    return (
      <div>
        <div className="seatCharts-container">
          <div className="front">SCREEN</div>
          {this.props.data.map((item, i) => {
            return <DanhSachHangGhe data={item} key={i} />;
          })}
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    data: state.MovieReducer.dataGhe,
  };
};

export default connect(mapStateToProps)(DanhSachGhe);
