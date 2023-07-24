import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"

// 위 코드는 useQueryObj라는 이름의 커스텀 훅을 정의하는 코드입니다. 

// 이 훅은 React Router의 useSearchParams와 useNavigate 훅을 이용하여
// 현재 URL의 쿼리 파라미터를 관리하고, 필요한 페이지로 이동하는 함수들을 제공합니다. 
// checkNull 함수는 객체에서 값이 null 또는 'null'인 속성들을 제거하여 쿼리 파라미터를 처리하는데 사용됩니다.
// 이렇게 생성된 queryObj와 다양한 이동 함수들(moveList, moveRead, moveModify)은 컴포넌트에서 활용하여 쿼리 파라미터를 업데이트하고 페이지 간의 이동을 수행합니다.

const checkNull = (obj) => { // Null값인 속성을 제거하는 함수

    // hook을 써야하는 함수는 
    const result = {}

    // 객체 obj의 각 속성을 검사하여 값이 null이 아니면 결과 객체에 추가합니다. 
    for (const attr in obj) {
        const attrName = attr
        const attrValue = obj[attr]

        if (attrValue && attrValue !== 'null') {
            result[attrName] = attrValue
        }
    }

    return result

}

// 쿼리 파라미터를 관리하는 커스텀 훅 useQueryObj
const useQueryObj = () => {

    // useSearchParams 훅을 사용하여 현재 URL의 쿼리 파라미터를 가져오고, setSearch 함수를 통해 업데이트합니다.
    const [search, setSearch] = useSearchParams() // 검색할때 사용
    const navigate = useNavigate()

    console.log(search)

    //useSearchParams값을 가져오는방법, 쿼리 파라미터 중에 page, size, type, keyword 값을 가져옵니다.
    const page = search.get("page") || 1
    const size = search.get("size") || 10
    const type = search.get("type")
    const keyword = search.get("keyword")

    // checkNull 함수를 사용하여 Null 값인 속성을 제거한 queryObj 객체를 생성합니다.
    const queryObj = checkNull({ page, size, type, keyword })

    // 이동 함수들(moveList, moveRead, moveModify)을 정의합니다.
    // moveList 함수: 리스트 페이지로 이동하며, 쿼리 파라미터를 query string으로 만들어 navigate 함수로 이동합니다.
    const moveList = () => {
        const queryString = createSearchParams(queryObj).toString()
        navigate(`../list?${queryString}`)
    }

    // moveRead 함수: 특정 게시글 상세 페이지로 이동하며, 쿼리 파라미터를 query string으로 만들어 navigate 함수로 이동합니다.
    const moveRead = (bno) => {
        console.log("moveRead: " + bno)
        const queryString = createSearchParams(queryObj).toString()
        navigate(`../read/${bno}?${queryString}`)
    }

    // moveModify 함수: 특정 게시글 수정 페이지로 이동하며, 쿼리 파라미터를 query string으로 만들어 navigate 함수로 이동합니다.
    const moveModify = (bno) => {
        console.log("moveModify: " + bno)
        const queryString = createSearchParams(queryObj).toString()
        navigate(`../modify/${bno}?${queryString}`)
    }

    // queryObj와 이동 함수들을 객체로 반환합니다.
    return { queryObj, setSearch, moveRead, moveList, moveModify }
}

export default useQueryObj