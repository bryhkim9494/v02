import { useEffect, useState } from "react";
import { createSearchParams } from "react-router-dom";
import { getList } from "../../api/boardAPI";
import ListPageComponent from "../common/ListPageComponent";


const initState = {
    dtoList: [],
    end: 0,
    start: 0,
    next: false,
    prev: false,
    pageNums: [],
    page: 0,
    size: 0,
    requestDTO: null,
}

const ListComponent = ({ queryObj, movePage, moveRead }) => {

    const [listData, setListData] = useState(initState);

    useEffect(() => {
        getList(queryObj).then(data => {
            console.log(data)
            setListData(data)
        })
    }, [queryObj])

    return (
        <div>
            <div className="text-3xl font-bold mt-5 mb-3 text-center">List Component</div>
            <div>
                <ul>
                    {listData.dtoList.map(dto =>
                        <li className="bg text-gray-800 px-4 py-3 text-center" key={dto.bno}
                            onClick={() => moveRead(dto.bno)}//파라미터가있으면 람다식
                        >{dto.bno} - {dto.title} - {dto.replyCount} </li>)}
                </ul>
            </div>
            <ListPageComponent movePage={movePage} {...listData}></ListPageComponent>
        </div>
    ); // use가 있는애들은 component에서만 사용
}


export default ListComponent;