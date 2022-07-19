import React, { Component } from "react";

const DefailData = [
  { id: "01", content: "你好 中国" },
  { id: "02", content: "你好 尚硅谷" },
  { id: "03", content: "你好 未来的自己" },
];

export default class Detail extends Component {
  render() {
    console.log(this.props);
    const { id, title } = this.props.match.params;
    const findResult = DefailData.find((item) => {
      return item.id === id;
    });
    return (
      <div>
        <ul>
          <li>id:{id}</li>
          <li>title:{title}</li>
          <li>content:{findResult.content}</li>
        </ul>
      </div>
    );
  }
}
