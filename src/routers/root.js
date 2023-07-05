import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import ListPage from "../pages/board/ListPage";


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
        // element: <div>Board</div>,
        children: [
            {
                path: "list",
                element: <ListPage></ListPage>
            }

        ]
    }

])

export default router;