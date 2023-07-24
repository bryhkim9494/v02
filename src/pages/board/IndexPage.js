import { Outlet } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";


const IndexPage = () => {   //해당 컴포넌트는 BasicLayout 컴포넌트로 감싸진 형태로 구성되어 있으며, 
                            // 페이지 상단에 List와 Register를 보여주는 UI를 렌더링합니다. 
                            // 그리고 Outlet 컴포넌트를 사용하여 하위 라우트로 전환된 컴포넌트를 렌더링합니다. 
                            // IndexPage는 라우트 구조에서 루트 경로에 해당하며, 하위 라우트들을 렌더링하는 컨테이너 역할을 합니다. 
                            // 따라서 IndexPage는 다른 페이지들의 부모 컴포넌트 역할을 수행합니다.

    return (

        // BasicLayout 컴포넌트로 감싸진 컴포넌트를 렌더링합니다.
        <BasicLayout>
            {/* 페이지 상단에 List와 Register를 보여주는 UI를 렌더링합니다. */}
            <div className="mt-4 p-4 bg-emerald-300 text-2xl text-white flex justify-center">
                <div className="underline font-extrabold m-2 p-2">List</div>
                <div className="underline font-extrabold m-2 p-2">Register</div>
            </div>
            {/* Outlet 컴포넌트를 사용하여 하위 라우트로 전환된 컴포넌트를 렌더링합니다. */}
            <div className="h-full bg-white w-full border-2">
                <Outlet></Outlet>
            </div>
        </BasicLayout>
    );
}

export default IndexPage;