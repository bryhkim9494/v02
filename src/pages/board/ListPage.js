import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import ListComponent from "../../components/board/ListComponent";
import ListSearchComponent from "../../components/board/ListSearchComponent";
import useQueryObj from "../../hooks/useQueryObj";



// const checkNull2 = (obj) => {

//     const result = {}

//     for (const attr in obj) {
//         const attrName = attr
//         const attrValue = obj[attr]

//         if (attrValue && attrValue !== 'null') {
//             result[attrName] = attrValue
//         }
//     }

//     return result
// }

const ListPage = () => {

    

    const {queryObj, setSearch,moveRead} = useQueryObj() // useQueryObj는 커스텀훅스

    // hooks(use~)는 component바로 밑에서 선언해야함

    console.log("queryObj ------------------------ ")
    console.log(queryObj)

    const movePage = (num) => {
        console.log("NUM ------------------------" + num)
        queryObj.page = num
        setSearch({ ...queryObj })
    }
    // 리액트 라우터가 적용된 게시판
    const moveSearch = (type, keyword) => {
        queryObj.page = 1
        queryObj.type = type
        queryObj.keyword = keyword

        setSearch({ ...queryObj })
    }



    return (

        <div>
            <div className="font-bold text-4xl">Board List Page</div>
            <ListSearchComponent moveSearch={moveSearch} queryObj={queryObj}></ListSearchComponent>

            <ListComponent
                queryObj={queryObj}
                movePage={movePage}
                moveRead={moveRead}>

            </ListComponent>
        </div>
        //리액트 개발 순서 : 페이지 만들고-> 라우터-> 컴포넌트
    );
}

export default ListPage;