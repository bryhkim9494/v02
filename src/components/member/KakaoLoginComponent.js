import { Link } from "react-router-dom";

const REST_KEY = '3890ce4cb953260091fdb53eb0563d01' //강사님꺼
const REDIRECT_URI = 'http://localhost:3000/member/kakao'

const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code` //인가 코드를 받는 URL

const KakaoLoginComponent = () => { // 이 컴포넌트는 버튼한개임

    return (
        <div className="text-3xl text-white">
            <Link to={kakaoURL}>KAKAO LOGIN</Link>
        </div>
    );
}

export default KakaoLoginComponent;