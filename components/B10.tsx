import React, { Component } from "react";

interface Todolist {
  id: number;
  name: string;
  assign: string;
  status: boolean;
  created_at: number;
}

export default class B10 extends Component<Todolist> {
  constructor(props: Todolist) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 1,
          name: "Thiết kế header",
          assign: "Phạm Trung Hiếu",
          status: false,
          created_at: Date.now(),
        },
        {
          id: 2,
          name: "Thiết kế footer",
          assign: "Phạm Trung Hiếu",
          status: true,
          created_at: Date.now(),
        },
      ],
    };
  }
  formatStatus = (status: boolean) => {
    return status ? "Đã hoàn thành" : "Chưa hoàn thành";
  };
  formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const formattedDate =
      (day < 10 ? "0" + day : day) +
      "/" +
      (month < 10 ? "0" + month : month) +
      "/" +
      year;
    const formattedTime =
      (hours < 10 ? "0" + hours : hours) +
      ":" +
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds);
    return `${formattedDate} ${formattedTime}`;
  };
  render() {
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Tên công việc</th>
              <th scope="col">Người thực hiện</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Thời gian tạo</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tasks.map((task: Todolist, index: number) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td>{task.assign}</td>
                <td>{this.formatStatus(task.status)}</td>
                <td>{this.formatDate(task.created_at)}</td>
                <td>
                  <button>Sửa</button>
                  <button>Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
