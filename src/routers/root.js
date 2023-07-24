import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import ListPage from "../pages/board/ListPage";
import IndexPage from "../pages/board/IndexPage";

import { Suspense, lazy } from "react";
import LoadingPage from "../pages/LoadingPage";
import KakaoRedirectPage from "../pages/member/KakaoRedirectPage";


// 로딩 컴포넌트
const Loading = <LoadingPage></LoadingPage>

// 각 페이지를 lazy loading 방식으로 import
const Board_Index = lazy(() => import("../pages/board/IndexPage"))
const Board_List = lazy(() => import("../pages/board/ListPage"))
const Board_Read = lazy(() => import("../pages/board/ReadPage"))

const Products_Index = lazy(() => import("../pages/products/IndexPage"))
const Products_List = lazy(() => import("../pages/products/ListPage"))
const Products_Register = lazy(() => import("../pages/products/RegisterPage"))
const Products_Read = lazy(() => import("../pages/products/ReadPage"))
const Products_Modify = lazy(() => import("../pages/products/ModifyPage"))

const Member_Login = lazy(() => import("../pages/member/LoginPage"))


const router = createBrowserRouter([ //페이지는 무조건 라우팅설정
    {
        path: "", // 슬래쉬 굳이 안써도됨 // 루트 페이지
        element: <MainPage></MainPage> // MainPage 컴포넌트를 렌더링
    },

    {
        path: "about",
        element: <AboutPage></AboutPage> // AboutPage 컴포넌트를 렌더링
    },
    {
        path: "member/login",
        element: <Suspense fallback={Loading}><Member_Login /></Suspense>, // 로그인 페이지를 렌더링하며, Suspense를 사용하여 lazy loading을 적용함
    },

    {
        path: 'member/kakao',
        element: <KakaoRedirectPage></KakaoRedirectPage> // 카카오 로그인 리다이렉트 페이지를 렌더링
    },

    {
        path: "board", // 게시판 페이지
        element: <Suspense fallback={Loading}><Board_Index /></Suspense>, // 게시판 인덱스 페이지를 렌더링하며, Suspense를 사용하여 lazy loading을 적용함
        children: [
            {
                path: "list",
                element: <Suspense fallback={Loading}><Board_List /></Suspense> // 게시판 리스트 페이지를 렌더링하며, Suspense를 사용하여 lazy loading을 적용함
            },
            {
                path: "read/:bno",
                element: <Suspense fallback={Loading}><Board_Read /></Suspense> // 게시판 상세 페이지를 렌더링하며, Suspense를 사용하여 lazy loading을 적용함
            }
        ]
    },
    {
        path: "products",
        element: <Suspense fallback={Loading}><Products_Index /></Suspense>, // 제품 인덱스 페이지를 렌더링하며, Suspense를 사용하여 lazy loading을 적용함
        children: [
            {
                path: "list",
                element: <Suspense fallback={Loading}><Products_List /></Suspense> // 제품 리스트 페이지를 렌더링하며, Suspense를 사용하여 lazy loading을 적용함
            },
            {
                path: "register",
                element: <Suspense fallback={Loading}><Products_Register /></Suspense>// 제품 등록 페이지를 렌더링하며, Suspense를 사용하여 lazy loading을 적용함
            },
            {
                path: "read/:pno",
                element: <Suspense fallback={Loading}><Products_Read /></Suspense> // 제품 상세 페이지를 렌더링하며, Suspense를 사용하여 lazy loading을 적용함
            },
            {
                path: "modify/:pno",
                element: <Suspense fallback={Loading}><Products_Modify /></Suspense> // 제품 수정 페이지를 렌더링하며, Suspense를 사용하여 lazy loading을 적용함
            }
        ]
    }

])

export default router;