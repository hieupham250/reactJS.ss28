import React, { Component } from "react";

interface Person {
  name: string;
}

export default class B1 extends Component {
  constructor(props: Person) {
    super(props);
    this.state = {
      name: "Phạm Trung Hiếu",
    };
  }
  render() {
    return (
      <>
        <h1>Họ và tên: {this.state.name}</h1>
      </>
    );
  }
}
