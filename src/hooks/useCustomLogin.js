import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const useCustomLogin = (fn) => {

    const loginInfo = useSelector(state => state.login)
    const navigate = useNavigate()
    useEffect(() => {

        if (fn) {
            if (!loginInfo.signed) {
                fn(navigate) // 함수를 실행한다는뜻
            }
            return
        }

        console.log("signed: " + loginInfo.signed)
        if (!loginInfo.signed) { // 이 if절 코드가 login안하면 about페이지에 못들어가게 하는 코드임
            navigate('/member/login')
        }
    }, [loginInfo.signed])

    return { loginInfo }

}

export default useCustomLogin