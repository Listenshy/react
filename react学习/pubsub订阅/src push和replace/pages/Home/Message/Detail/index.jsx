import React, { Component } from "react";
// import qs from "query-string";

const DefailData = [
  { id: "01", content: "你好 中国" },
  { id: "02", content: "你好 尚硅谷" },
  { id: "03", content: "你好 未来的自己" },
];

export default class Detail extends Component {
  render() {
    //  接收parmas参数
    // const { id, title } = this.props.match.params;

    // 接收search参数
    // const { search } = this.props.location;
    // const { id, title } = qs.parse(search.slice(1));

    // 接收state
    // console.log(this.props.location);
    const { id, title } = this.props.location.state || {};

    const findResult =
      DefailData.find((item) => {
        return item.id === id;
      }) || {};
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
