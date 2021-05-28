import React, { Component } from "react";
import PropTypes from "prop-types";

export default class NicknameList extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
    handleRemove: PropTypes.func.isRequired,
  };

  //배열의 형태로 만들어줘야한다는 개념을 위한 함수.
  generateItems = (list) => {
    let items = [];

    for (let i = 0; i < list.length; i++) {
      items.push(
        <li key={i}>
          {list[i].name}:{list[i].nickname}
        </li>
      );
    }
    return items;
  };

  shouldComponentUpdate(nextProps, nextState) {}

  render() {
    console.log("call render() of NicknameList compoenent...");

    const { list } = this.props;
    //디스트라이먼트 업사이트(구조 분해 할당)
    return (
      <div>
        <ul>
          {this.generateItems(this.props.list)}
          {this.props.list.map((item) => (
            <li
              key={item.id}
              onDoubleClick={() => this.props.handleRemove(item.id)}
              style={{ cursor: "pointer" }}
            >
              {item.name}:{item.nickname}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

/*라이플 사이클
꼭 사용 해야될때가 있음
이 2개 DidMOunt, DidUpdate
근데 클래스형 컴포넌트에서만 지원하고 함수형에서는 지원하지 않아서 따로 사용하는 방법이있음

클래스형 컴포넌트
Component -> state, LifeCycle

UsedefindComponent

함수형 컴포넌트 + Hooks개념

function A() {}

*/
