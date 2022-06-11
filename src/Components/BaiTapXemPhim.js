import React, { Component } from "react";
import BookingDetails from "./BookingDetails";
import DanhSachGhe from "./DanhSachGhe";
import "./style.css";

export default class BaiTapXemPhim extends Component {
  render() {
    return (
      <div
        className="content"
        style={{
          background: "url(./img/banner2.jpg) no-repeat center",
        }}
      >
        <h1>Movie Ticket Booking Widget</h1>
        <div className="main">
          <h2>Multiplex Theatre Showing Screen 1</h2>
          <div className="demo">
            <DanhSachGhe />
            <BookingDetails />
          </div>
        </div>
      </div>
    );
  }
}
