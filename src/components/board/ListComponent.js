import { useEffect, useState } from "react";
import { createSearchParams } from "react-router-dom";
import { getList } from "../../api/boardAPI";
import ListPageComponent from "../common/ListPageComponent";


const initState = { // 초기 상태 정의
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

const ListComponent = ({ queryObj, movePage, moveRead }) => { // 해당 컴포넌트는 게시글 목록을 테이블 형태로 렌더링하고, 게시글을 클릭하면 해당 게시글로 이동하는 기능을 제공합니다. 

  const [listData, setListData] = useState(initState); // 상태 변수 listData와 setter 함수 setListData를 선언합니다.

  // useEffect 훅을 사용하여 queryObj가 변경될 때마다 getList 함수를 호출하여 
  // 게시글 데이터를 가져와 listData 상태에 저장하고, 이를 테이블로 렌더링합니다. 
  
  useEffect(() => { // queryObj가 변경될 때마다 실행되는 useEffect 훅입니다.

    getList(queryObj).then(data => {
      // getList 함수를 호출하여 게시글 리스트 데이터를 가져옵니다.
      // 가져온 데이터를 listData 상태에 저장합니다.
      console.log(data)
      setListData(data)
    })
  }, [queryObj])

  return (
    // <div>
    //     <div className="text-3xl font-bold mt-5 mb-3 text-center">List Component</div>
    //     <div>
    //         <ul>
    //             {listData.dtoList.map(dto =>
    //                 <li className="bg text-gray-800 px-4 py-3 text-center" key={dto.bno}
    //                     onClick={() => moveRead(dto.bno)}//파라미터가있으면 람다식
    //                 > {dto.bno} - {dto.title} - {dto.replyCount} </li>)}
    //         </ul>
    //     </div>
    //     <ListPageComponent movePage={movePage} {...listData}></ListPageComponent>
    // </div>
    <div>
      {/* 리스트 목록을 테이블 형태로 렌더링합니다. */}
      {/* 리스트 목록 테이블로 변경 */}
      <div className="text-3xl font-bold mt-5 mb-3 text-center">게시글 목록</div>
      <table className="min-w-full text-left text-sm font-light">
        <thead className="border-b font-medium dark:border-neutral-500">
          <tr>
            <th scope="col" className="px-4 py-3 text-white bg-zinc-700">번호</th>
            <th scope="col" className="px-4 py-3 text-white bg-zinc-700">제목</th>
            <th scope="col" className="px-4 py-3 text-white bg-zinc-700">댓글 수</th>
          </tr>
        </thead>
        <tbody>
          {/* 게시글 데이터를 map 함수를 이용하여 테이블 행으로 변환하여 렌더링합니다. */}
          {listData.dtoList.map(dto => (
            <tr
              className="border-b dark:border-neutral-500"
              key={dto.bno}
              onClick={() => moveRead(dto.bno)} // 클릭 시 해당 게시글로 이동하는 이벤트 핸들러를 등록합니다.
            >
              <td className="whitespace-nowrap px-4 py-3 font-medium">{dto.bno}</td>
              <td className="whitespace-nowrap px-4 py-3">{dto.title}</td>
              <td className="whitespace-nowrap px-4 py-3">{dto.replyCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* 페이지네이션을 제공하는 ListPageComponent 컴포넌트를 렌더링합니다. */}
      <ListPageComponent movePage={movePage} {...listData}></ListPageComponent>
    </div>
  ); // use가 있는애들은 component에서만 사용
}


export default ListComponent;