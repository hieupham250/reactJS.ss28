import React, { Component } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default class B8 extends Component<any, Product> {
  render() {
    return (
      <>
        <ul>
          {this.props.products.map((product: Product, index: number) => {
            return (
              <li key={index}>
                <p>Tên sách: {product.name}</p>
                <p>Giá tiền: {product.price}</p>
                <p>Số lượng: {product.quantity}</p>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
