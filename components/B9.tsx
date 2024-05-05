import React, { Component } from "react";

interface ClassComponent {
  theme: string;
  language: string;
}

export default class B9 extends Component<any, ClassComponent> {
  constructor(props: ClassComponent) {
    super(props);
    this.state = {
      theme: "light",
      language: "english",
    };
  }
  toggleTheme = () => {
    this.setState((prevState) => ({
      theme: prevState.theme === "light" ? "dark" : "light",
    }));
  };
  toggleLanguage = () => {
    this.setState((prevState) => ({
      language: prevState.language === "english" ? "vietnamese" : "english",
    }));
  };
  render() {
    return (
      <>
        <div className={`App ${this.state.theme}`}>
          <h1>Ứng dụng</h1>
          <p>Chủ đề {this.state.theme}</p>
          <p>Ngôn ngữ: {this.state.language}</p>
          <button onClick={this.toggleTheme}>Chuyển đổi Chủ đề</button>
          <button onClick={this.toggleLanguage}>Chuyển đổi Ngôn ngữ</button>
        </div>
      </>
    );
  }
}
