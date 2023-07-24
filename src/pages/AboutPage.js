import CountButtons from "../components/counter/CountButtons";
import CountDisplay from "../components/counter/CountDisplay";
import TodoInput from "../components/todo/TodoInput";
import useCustomLogin from "../hooks/useCustomLogin";
import BasicLayout from "../layouts/BasicLayout";


const AboutPage = () => {

    // useCustomLogin 훅스를 사용하여 로그인 정보를 가져옴
    const { loginInfo } = useCustomLogin()

    return (

        // BasicLayout으로 감싼 About 페이지 컴포넌트
        <BasicLayout>
            <div>About Page</div>
            
            {/* Todo 입력 컴포넌트 */}
            <TodoInput></TodoInput>
            
            {/* 카운트를 표시하는 컴포넌트 */}
            <CountDisplay></CountDisplay>
            
            {/* 카운트를 증가, 감소하는 버튼을 가지고 있는 컴포넌트 */}
            <CountButtons></CountButtons>
        </BasicLayout>
    );
}

export default AboutPage;