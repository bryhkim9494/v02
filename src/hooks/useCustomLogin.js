import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const useCustomLogin = (fn) => {

    const loginInfo = useSelector(state => state.login)
    const navigate = useNavigate()
    useEffect(() => {

        if (fn) {
            if (!loginInfo.email) {
                fn(navigate) // 함수를 실행한다는뜻
            }
            return
        }

        console.log("signed: " + loginInfo.email)
        if (!loginInfo.email) { // 이 if절 코드가 login안하면 about페이지에 못들어가게 하는 코드임
            navigate('/member/login')
        }
    }, [loginInfo.email])

    return { loginInfo }

}

export default useCustomLogin