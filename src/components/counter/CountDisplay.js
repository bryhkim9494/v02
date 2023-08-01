import { useSelector } from "react-redux";

// Redux 스토어에 저장된 countSlice 상태를 조회하여, COUNT 값을 표시하는 컴포넌트입니다.
const CountDisplay = () => {

    // useSelector 훅을 사용하여 Redux 스토어의 상태를 조회합니다.
    // state는 Redux 스토어에 저장된 상태 객체이며, counter는 countSlice 리듀서에 해당하는 부분입니다.
    // countSlice의 상태 객체는 { num: number } 형태로 되어있을 것입니다.
    // useSelector는 state에서 counter 부분만 선택하여 obj에 할당합니다.
    const obj = useSelector(state => state.counter)

    // obj를 콘솔에 출력하여 확인합니다. (개발 단계에서의 디버깅 용도)
        console.log(obj);

    // obj.num을 표시하여 COUNT 값을 화면에 렌더링합니다.
    return (
        <div className="text-4xl">
            COUNT: {obj.num}
        </div>
    );
}

export default CountDisplay;