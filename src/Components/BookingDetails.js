import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteAction } from "./redux/action/MovieAction";

class BookingDetails extends Component {
  render() {
    return (
      <div className="booking-details">
        <div id="legend" className="seatCharts-legend">
          <div className="row seatCharts-legendList text-left">
            <div className="col-4 seatCharts-legendItem">
              <div className="seatCharts-seat seatCharts-cell available " />
              <span className="seatCharts-legendDescription">Available</span>
            </div>
            <div className="col-4 seatCharts-legendItem">
              <div className="seatCharts-seat seatCharts-cell unavailable" />
              <span className="seatCharts-legendDescription">Sold</span>
            </div>
            <div className="col-4 seatCharts-legendItem">
              <div className="seatCharts-seat seatCharts-cell selected" />
              <span className="seatCharts-legendDescription">Selected</span>
            </div>
          </div>
        </div>
        <hr />
        <h3 className="font-weight-bold mb-3">Danh sách ghế chọn</h3>
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Số ghế</th>
                <th scope="col">Giá tiền</th>
                <th scope="col">Hủy</th>
              </tr>
            </thead>
            <tbody>
              {this.props.cart.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{item.soGhe}</td>
                    <td>{item.gia}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={() => {
                          this.props.hanleDelete(item);
                        }}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <th scope="row">Tổng cộng</th>
                <td>
                  {this.props.cart.length &&
                    this.props.cart
                      .map((item) => {
                        return item.gia;
                      })
                      .reduce((tong, gia) => {
                        return tong + gia;
                      })}
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
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
    hanleDelete: (soGhe) => {
      dispatch(deleteAction(soGhe));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingDetails);
