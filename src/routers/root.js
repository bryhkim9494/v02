import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import ListPage from "../pages/board/ListPage";
import IndexPage from "../pages/board/IndexPage";

import { Suspense, lazy } from "react";
import LoadingPage from "../pages/LoadingPage";

const Loading = <LoadingPage></LoadingPage>
const Board_Index = lazy(() => import("../pages/board/IndexPage"))
const Board_List = lazy(() => import("../pages/board/ListPage"))
const Board_Read = lazy(() => import("../pages/board/ReadPage"))

const router = createBrowserRouter([
    {
        path: "", // 슬래쉬 굳이 안써도됨
        element: <MainPage></MainPage>
    },

    {
        path: "about",
        element: <AboutPage></AboutPage>
    },
    {
        path: "board",
        element: <Suspense fallback={Loading}><Board_Index /></Suspense>,
        children: [
            {
                path: "list",
                element: <Suspense fallback={Loading}><Board_List /></Suspense>
            },
            {
                path: "read/:bno",
                element: <Suspense fallback={Loading}><Board_Read /></Suspense>
            }

        ]
    }

])

export default router;