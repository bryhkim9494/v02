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

    

    // useQueryObj 커스텀 훅을 사용하여 쿼리 파라미터와 관련된 상태와 함수를 가져옵니다.
    const {queryObj, setSearch,moveRead} = useQueryObj() // useQueryObj는 커스텀훅스

    // hooks(use~)는 component바로 밑에서 선언해야함

    console.log("queryObj ------------------------ ")
    console.log(queryObj)

    const movePage = (num) => {  // 페이지 이동 시 호출되는 함수로, 페이지 번호를 업데이트하여 쿼리 파라미터를 변경합니다.
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

        // 게시판 목록 페이지를 렌더링합니다.
        <div>
            <div className="font-bold text-4xl">Board List Page</div>
             {/* 검색 기능을 제공하는 ListSearchComponent 컴포넌트를 렌더링합니다. */}
            <ListSearchComponent moveSearch={moveSearch} queryObj={queryObj}></ListSearchComponent>

            {/* 게시글 목록을 표시하는 ListComponent 컴포넌트를 렌더링합니다. */}
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