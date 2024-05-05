import React, { Component } from "react";

interface Person {
  id: number;
  name: string;
  dayOfBirth: string;
  address: string;
}

export default class B1 extends Component {
  constructor(props: Person) {
    super(props);
    this.state = {
      id: 1,
      name: "Phạm Trung Hiếu",
      dayOfBirth: "25/07/2004",
      address: "Hà Nội",
    };
  }
  render() {
    return (
      <>
        <h1>Thông tin cá nhân</h1>
        <p>Id: {this.state.id}</p>
        <p>Họ và tên: {this.state.name}</p>
        <p>Ngày sinh: {this.state.dayOfBirth}</p>
        <p>Địa chỉ: {this.state.address}</p>
      </>
    );
  }
}
