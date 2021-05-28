import React, { useState } from "react";

//함수형 컴포넌트 (화살표 함수)
const Hello3 = (props) => {
  //함수형 에서는 useState 함수로 state를 사용한다.⭐
  // useState 함수를 호출하면 배열이 반환되는데,
  // 첫 번째 원소는 현재 상태
  // 두번째 원소는 상태를 바꾸어 주는 함수
  const [counter, setCounter] = useState(0);

  const handleClick = (e) => {
    const name = e.target.name;
    if (name === "inc") {
      setCounter(counter + 1);
    } else if (name === "dec") {
      console.log(counter);
      setCounter(counter - 1);
    }
  };

  //Function + Hooks에 대해서 공부해야됨.⭐
  //stateless component

  //함수형 컴포넌트에서는 this.키워드가 필요없음.
  return (
    <div>
      <h1>{props.title} by Hello3</h1>
      <h3>{props.children}</h3>
      <br />
      <h3>Counter : {counter}</h3>
      <div>
        <button name="inc" onClick={handleClick}>
          +
        </button>
        <button name="dec" onClick={handleClick}>
          -
        </button>
      </div>
    </div>
  );
};

export default Hello3;
