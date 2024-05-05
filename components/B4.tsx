import React, { Component } from "react";

interface Person {
  name: string;
}

export default class B4 extends Component<Person> {
  render() {
    return (
      <>
        <h1>Họ và tên bên cha: {this.props.name}</h1>
        <h1>Họ và tên bên con: {this.props.name}</h1>
      </>
    );
  }
}
