import { useDispatch } from "react-redux";
import { dec, inc } from "../../reducers/countSlice";

// Redux store에 액션을 디스패치(dispatch)하기 위해 useDispatch 훅을 사용하는 컴포넌트입니다.
// 디스패치(dispatch)란, Redux에서 액션(Action)을 보내는 것을 의미합니다. 액션은 일종의 객체로, Redux 애플리케이션에서 상태 변화를 일으키는 유일한 방법입니다.
const CountButtons = () => {
    const dispatch = useDispatch()

    // INC 버튼을 클릭하면, countSlice에 정의된 inc 액션을 디스패치하는 함수입니다.
    // 인자로 2를 전달하여 값을 증가시킵니다.
    const handleClickInc = () => {
        dispatch(inc(2))
    }

    // DEC 버튼을 클릭하면, countSlice에 정의된 dec 액션을 디스패치하는 함수입니다.
    // 인자로 2를 전달하여 값을 감소시킵니다.
    const handleClickDec = () => {
        dispatch(dec(2))
    }

    return (
        <div>
            <button onClick={handleClickInc}>INC</button>
            <button onClick={handleClickDec}>DEC</button>
        </div>
    );
}

export default CountButtons;