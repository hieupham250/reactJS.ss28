import React, { Component } from "react";

interface User {
  id: number;
  name: string;
  address: string;
  email: string;
}

export default class B6 extends Component<any, User> {
  render() {
    return (
      <>
        <h1>Thông tin user</h1>
        <ul>
          {this.props.users.map((user: User, index: number) => {
            return (
              <li key={index}>
                <p>ID: {user.id}</p>
                <p>Name: {user.name}</p>
                <p>Address: {user.address}</p>
                <p>Email: {user.email}</p>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
