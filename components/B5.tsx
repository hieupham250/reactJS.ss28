import React, { Component } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default class B5 extends Component<any, Product> {
  render() {
    return (
      <>
        <h1>Thông tin sách</h1>
        <p>Id: {this.props.product.id}</p>
        <p>Tên sách: {this.props.product.name}</p>
        <p>Giá tiền: {this.props.product.price}Đ</p>
        <p>Số lượng: {this.props.product.quantity}</p>
      </>
    );
  }
}
