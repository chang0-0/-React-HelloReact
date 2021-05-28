import React, { Component } from "react";

export default class NicknameInput extends Component {
  state = {
    name: "",
    nickname: "",
  };

  handleChange = (e) => {
    console.log(e.target.value);

    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
    //비동기처리.

    console.log(this.state);
  };

  //돔객체제 직접 접근할때 ref props값을 사용함
  handleClick = () => {
    this.props.handleClick(this.state.name, this.state.nickname);
    this.setState({ name: "", nickname: "" });
    this.nameInput.current.focus();
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  nameInput = React.createRef();

  render() {
    return (
      <div>
        <input
          /*ref={(ref) => {
            this.nameInput = ref;
          }}*/

          ref={this.nameInput}
          type="text"
          name="name"
          value={this.state.name}
          placeholder="이름"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="nickname"
          value={this.state.nickname}
          placeholder="별명"
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>등록</button>
      </div>
    );
  }
}
