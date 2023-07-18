import { useSearchParams } from "react-router-dom";


const KakaoRedirectPage = () => { // 파라미터 수집하려고 이 페이지를 만듬

    const [searchParams] = useSearchParams()
    const code = searchParams.get('code')

    return (
        <div>
            {code}
        </div>
    );
}

export default KakaoRedirectPage;