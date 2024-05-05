import React, { Component } from "react";

interface Person {
  id: number;
  name: string;
  address: string;
}

interface Props {}

interface State {
  users: Person[];
}

export default class B1 extends Component<Props, State> {
  constructor(props: Person) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: "Phạm Trung Hiếu", address: "Hà Nội" },
        { id: 2, name: "Cao Thị Mỹ Tâm", address: "Đà Nẵng" },
        { id: 1, name: "Nguyễn Minh Sơn", address: "Hà Nội" },
      ],
    };
  }
  render() {
    return (
      <>
        {this.state.users.map((user: Person, index: number) => {
          return <h1 key={index}>Họ và tên: {user.name}</h1>;
        })}
      </>
    );
  }
}
