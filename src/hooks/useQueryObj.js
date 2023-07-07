import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"

const checkNull = (obj) => {
    // hook을 써야하는 함수는 
    const result = {}

    for (const attr in obj) {
        const attrName = attr
        const attrValue = obj[attr]

        if (attrValue && attrValue !== 'null') {
            result[attrName] = attrValue
        }
    }

    return result

}

const useQueryObj = () => {

    const [search, setSearch] = useSearchParams()
    const navigate = useNavigate()

    console.log(search)

    //useSearchParams값을 가져오는방법
    const page = search.get("page") || 1
    const size = search.get("size") || 10
    const type = search.get("type")
    const keyword = search.get("keyword")

    const queryObj = checkNull({ page, size, type, keyword })

    const moveList = () => {
        const queryString = createSearchParams(queryObj).toString()
        navigate(`../list?${queryString}`)
    }

    const moveRead = (bno) => {
        console.log("moveRead: " + bno)
        const queryString = createSearchParams(queryObj).toString()
        navigate(`../read/${bno}?${queryString}`)
    }

    return {queryObj, setSearch, moveRead, moveList}
}

export default useQueryObj