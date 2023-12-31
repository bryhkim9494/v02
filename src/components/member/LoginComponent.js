import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postLoginThunk, requestLogin } from "../../reducers/loginSlice";

// 초기 로그인 상태를 정의하는 객체입니다.
const initState = {
    email: 'user00@aaa.com', // 이메일
    pw: '1111', // 비밀번호
}

const LoginComponent = () => {

    // Redux 스토어에서 loginSlice의 상태를 가져오는 훅입니다.
    const loginState = useSelector(state => state.login)

    const [loginInfo, setLoginInfo] = useState({ ...initState })

    const dispatch = useDispatch()

    const errorMsg = loginState.errorMsg
    console.log("ERRORMSG : " + errorMsg)
    return (
        <div>
            {/* '로그인중'은 모달로 빼는게 좋음 */}
            <div className="text-3xl bg-red-500">
                {loginState.loading ? '로그인중' : ''}
            </div>
            {errorMsg ? <div className="text-3xl bg-red-500">이메일과 비밀번호를 다시 확인해 주세요</div> : <></>}
            <div>
                <label>Email</label>
                <input type="text" name="email" value={loginInfo.email} onChange={() => { }}></input>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="pw" value={loginInfo.pw} onChange={() => { }}></input>
            </div>
            <div>
                <button onClick={() => dispatch(postLoginThunk(loginInfo))}>LOGIN</button>
            </div>
        </div>

    );
}

export default LoginComponent;