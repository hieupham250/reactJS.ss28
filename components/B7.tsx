import React, { Component } from "react";

interface ListPost {
  id: number;
  title: string;
  content: string;
  author: string;
}

export default class B7 extends Component<any, ListPost> {
  render() {
    return (
      <>
        <h1>Danh sách các bài viết</h1>
        <ul>
          {this.props.posts.map((post: ListPost, index: number) => {
            return (
              <li key={index}>
                <p>title: {post.title}</p>
                <p>content: {post.content}</p>
                <p>author: {post.author}</p>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
