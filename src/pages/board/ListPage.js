import { useSearchParams } from "react-router-dom";
import ListComponent from "../../components/board/ListComponent";

const checkNull = (obj) => {

    for (const attr in obj) {
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

    return obj;
}

const ListPage = () => {

    const [search, setSearch] = useSearchParams()

    console.log(search)

    //useSearchParams값을 가져오는방법
    const page = search.get("page") || 1
    const size = search.get("size") || 10
    const type = search.get("type")
    const keyword = search.get("keyword")

    const queryObj = checkNull({ page, size, type, keyword })

    console.log("queryObj ------------------------ ")
    console.log(queryObj)

    const movePage = (num) => {
        console.log("NUM ------------------------" + num)
        queryObj.page = num
        setSearch({ ...queryObj })
    }
    // 리액트 라우터가 적용된 게시판

    return (

        <div>
            {/* Board List Page */}
            <ListComponent queryObj={queryObj} movePage={movePage}></ListComponent>
        </div>
    );
}

export default ListPage;