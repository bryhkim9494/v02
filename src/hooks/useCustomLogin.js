import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// 커스텀 훅 useCustomLogin
const useCustomLogin = (fn) => {

    // Redux의 상태값 중 login 상태값을 가져옵니다.
    const loginInfo = useSelector(state => state.login)
    
    // useNavigate 훅을 사용하여 페이지 이동을 위한 함수를 가져옵니다.
    const navigate = useNavigate()

    useEffect(() => {

        // fn이 주어진 경우, 로그인 여부를 확인하여 fn을 실행합니다.
        if (fn) {
            if (!loginInfo.email) {
                fn(navigate) // 함수를 실행한다는뜻
            }
            return
        }

        console.log("signed: " + loginInfo.email)

        if (!loginInfo.email) { // 이 if절 코드가 login안하면 about페이지에 못들어가게 하는 코드임

            navigate('/member/login') // 로그인 여부를 확인하여 로그인되어 있지 않으면 '/member/login' 페이지로 이동합니다.
        }
    }, [loginInfo.email])

    // 로그인 정보를 반환합니다.
    return { loginInfo }

}

export default useCustomLogin