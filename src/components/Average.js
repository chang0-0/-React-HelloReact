import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react"; //리덕스 개념 공부하기⭐⭐

//불필요한 호출이 계속 진행됨.
const getAverage = (numbers) => {
  console.log("평균계산중");
  //원소가 없을때
  if (numbers.length === 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum / numbers.length;
};

//함수는 렌더링 될때마다 호출됨 이해중요!
function Average() {
  const [number, setNumber] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    console.log("렌더링이 완료되었습니다.");
    console.log("list 내용이 변경되었습니다.");
    //첫번째 호출은 component didmount 목적으로 호출
    //입력될때는 update 목적으로 호출됨
    return () => console.log("Clean Up");
  }, [list]); //componentDidMount(), componentDidUpdate()⭐⭐
  //종속값에 null을 주면componentDidMount 목적으로만 사용함.

  const handleChange = useCallback((e) => {
    setNumber(e.target.value);
    //함수호출을 통해서 값을 바꿔야됨.

    console.log(number);
  }, []);
  //종속 리스트가 바뀔때 재정의해서 반환함

  const handleClick = useCallback(() => {
    //list.push(number) <- 이런식으로 하면 안됨.(값을 직접적으로 변환 하는 행위)
    setList(list.concat(parseInt(number))); //concat을 이용해서 새로운 배열을 생성함.

    setNumber("");
    inputRef.current.focus(); //current 속성이 참조하는 돔 객체의 요소를 의미함
  }, [number, list]);

  //비동기적 처리이기때문에 클릭해서 이벤트 처리에서 하는게 아니라 따로 빼줘서함 해줘도 상관없지만 클릭해서 변하면 비동기처리로 한단계느리게 나오게됨.
  //함수 컴포넌트가 실행이되면 리렌더링 된다는걸 의미함
  //const avg = getAverage(list);

  const avg = useMemo(() => getAverage(list), [list]);

  //커서를 옮기려면 ref 값을 이용해야됨⭐⭐
  const inputRef = useRef(null);

  //상태값2개 -> 입력값 ul리스트
  return (
    <div>
      <div>
        <input
          type="text"
          name="number"
          value={number} //number를 출력하고
          onChange={handleChange} //변할때 함수를 호출
          ref={inputRef}
        />
        <button onClick={handleClick}>추가</button>
      </div>
      <ul>
        {list.map(
          (
            value,
            index /* 새로운 데이터 배열을 만듬 map메소드 배열을 계속 만들어서 저장함
                  index를 key으로 사용*/
          ) => (
            <li key={index}>{value}</li>
          )
        )}
      </ul>
      <div>
        <b>평균값 :</b>
        {avg}
      </div>
    </div>
  );
}

export default Average;
