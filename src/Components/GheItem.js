import React, { Component } from "react";
import { connect } from "react-redux";
import { gheItemAction } from "./redux/action/MovieAction";

class GheItem extends Component {
  handleTinhTrangGhe = (daDat, soGhe) => {
    let tinhTrang = "available";

    let index = this.props.cart.findIndex((item) => {
      return item.soGhe === soGhe;
    });

    if (daDat) {
      tinhTrang = "unavailable";
    } else if (index !== -1) {
      tinhTrang = "selected";
    }
    return tinhTrang;
  };

  render() {
    let { soGhe } = this.props.data;

    return (
      <div
        className={`seatCharts-seat seatCharts-cell ${this.handleTinhTrangGhe(
          this.props.data.daDat,
          soGhe
        )}`}
      >
        <label htmlFor={`btn-${soGhe}`}>{soGhe}</label>
        <button
          type="button"
          className="btn btn-primary"
          id={`btn-${soGhe}`}
          style={{ display: "none" }}
          onClick={() => {
            this.props.handleGheItem(this.props.data, soGhe);
          }}
        ></button>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    cart: state.MovieReducer.cart,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleGheItem: (gheItem, soGhe) => {
      dispatch(gheItemAction(gheItem, soGhe));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GheItem);
