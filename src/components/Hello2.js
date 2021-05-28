import React, { Component } from "react";
import PropTypes from "prop-types";
import NicknameInput from "./NicknameInput";
import NicknameList from "./NicknameList";
//rcc 단축 명령어 실행.

export default class Hello2 extends Component {
  static defaultProps = {
    title: "Hello, World!",
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
  };
  //클래스안에서 static을 정의한다는 거 공부하기.
  //프로토타입 상속이란걸 사용함.

  //생성자에서 빼낼수 있음.
  state = {
    counter: 0,
    list: [{ id: 1, name: "김철수", nickname: "cskim" }],
    nextId: 2,
  };
  //state의 불변성을 지켜줘야됨.

  addNickname = (name, nickname) => {
    this.setState({
      ...this.state,
      ///...이 앞에오면 이 객체의 속성을 풀어서 현재 객체에다가 이 객체의 속성을 풀으라는 뜻 (복사)
      list: this.state.list.concat({
        id: this.state.nextId,
        name, //변수하고 할당하는 값하고 같아서 줄여서 쓸수있음
        nickname,
      }),
      nextId: this.state.nextId + 1,
    });
    console.log(this.state.list);
  };
  //배열에 push를 쓰면 불변성이 깨짐

  removeNickname = (id) => {
    this.setState({
      list: this.state.list.filter((item) => item.id !== id),
    });
  };

  //함수가 정의될때 this값이 정의됨.
  //클래스 객체를 의미함.(따로 바인딩 할 필요가 없어짐.)
  //생성자 필요 없어짐.

  //화살표 함수 형식은 바인딩이 필요가 없음.
  handleClick = (e) => {
    const name = e.target.name;
    if (name === "inc") {
      this.setState({
        //this는 클래스객체를 의미함
        counter: this.state.counter + 1,
      });
    } else if (name === "dec") {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  };

  //카멜표기법 중요.
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.children}</h3>
        <br />
        <h3>Counter : {this.state.counter}</h3>
        <div>
          <button name="inc" onClick={this.handleClick}>
            +
          </button>
          <button name="dec" onClick={this.handleClick}>
            -
          </button>
        </div>
        <br />
        <br />
        <NicknameInput handleClick={this.addNickname} />
        <NicknameList
          list={this.state.list}
          handleRemove={this.removeNickname}
        />
      </div>
    );
  }
}
