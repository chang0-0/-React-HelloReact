import React, { Component } from "react";
import PropTypes from "prop-types";

//컴포넌트 스테이트 프롭스 이벤트처리 (수업 주제)
//클래스형 컴포넌트 | 함수형 컴포넌트 종류 2가지.

export default class Hello extends Component {
  constructor(props) {
    //생성자 props를 매개변수로 받음
    super(props); //부모클래스한테 전달

    this.state = {
      counter: 0,
    };

    // this.handleIncrement = this.handleIncrement.bind(this);
    // this.handleDecrement = this.handleDecrement.bind(this);
    //이벤트 핸들러 이기때문에 생성자에서 바인딩해줘야됨

    this.handleClick = this.handleClick.bind(this);
  }

  //증가 함수
  //   handleIncrement() {
  //     //this.state.counter += 1;
  //     //state에 직접 접근해서 값을 바꾸면안됨 이유는 리렌더링이 되지 않기 때문임.

  //     this.setState({
  //       counter: this.state.counter + 1,
  //     });
  //     console.log(this.state.counter);
  //   }

  //   //감소 함수
  //   handleDecrement() {
  //     this.setState({
  //       counter: this.state.counter - 1,
  //     });
  //     console.log(this.state.counter);
  //   }

  //클릭 이벤트 함수.
  handleClick(e) {
    const name = e.target.name;
    if (name === "inc") {
      this.setState({
        counter: this.state.counter + 1,
      });
    } else if (name === "dec") {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  }

  //리액트에서 이벤트 이름은 카멜표기법에 따라야 한다.
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
      </div>
    );
  }
}

Hello.defaultProps = {
  title: "Hello, World!",
};

Hello.propTypes = {
  title: PropTypes.string.isRequired,
};
