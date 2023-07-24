import { useEffect, useState } from "react";

const ListSearchComponent = ({ moveSearch, queryObj }) => { // ListSearchComponent 컴포넌트는 검색 기능을 제공하는 컴포넌트입니다.
    //계층구조
    //ListPage+(movePage)
    //ListSearchComponent - ListPageComponent


    // 아무리 데이터가 달라져도 화면에 나가는 데이터는 똑같아서 PageResponseDTO<E>를 만듬
    console.log('SearchComponent------------------------------------------')

    // 검색을 위한 상태 변수를 설정합니다.
    const [searchObj, setSearchObj] = useState({ type: '', keyword: '' })

    useEffect(() => { // queryObj가 변경될 때마다 실행되는 useEffect 훅입니다.

        // queryObj에서 type과 keyword 값을 가져와서 searchObj에 설정합니다.
        searchObj.type = queryObj.type || ''
        searchObj.keyword = queryObj.keyword || ''

        // 변경된 searchObj를 setSearchObj를 통해 업데이트합니다.
        setSearchObj({ ...searchObj })

    }, [queryObj])

    return (
        // 검색 UI를 렌더링합니다.
        <div className="m-4 p-4 bg-blue-300 border-2">
            <select className="border-1 m-2 p-2" value={searchObj.type} onChange={e => {
                searchObj.type = e.target.value
                setSearchObj({ ...searchObj })
            }}>
                <option value={''}>-------------</option>
                <option value={'t'}>제목</option>
                <option value={'c'}>내용</option>
                <option value={'w'}>작성자</option>
                <option value={'tc'}>제목 내용</option>
                <option value={'tcw'}>제목 내용 작성자</option>
            </select>
            <input type="text" placeholder="검색" className="border-1 m-2 p-2" value={searchObj.keyword} onChange={e => {
                searchObj.keyword = e.target.value
                setSearchObj({ ...searchObj })
            }}></input>
            <button className="p-2 m-2 border-2 bg-zinc-400" onClick={e => moveSearch(searchObj.type, searchObj.keyword)}>SEARCH</button>
        </div>
    );
}

export default ListSearchComponent;