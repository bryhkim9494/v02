import { useEffect, useState } from "react";

import ListPageComponent from "../common/ListPageComponent";
import { getList } from "../../api/productAPI";

// 초기 상태값을 정의하는 객체입니다.
const initState = {
  dtoList: [],    // 데이터 목록 배열
  end: 0,         // 현재 페이지의 끝 번호
  start: 0,       // 현재 페이지의 시작 번호
  next: false,    // 다음 페이지 존재 여부
  prev: false,    // 이전 페이지 존재 여부
  pageNums: [],   // 페이지 번호 배열
  page: 0,        // 현재 페이지 번호
  size: 0,        // 한 페이지에 보여줄 데이터 개수
  requestDTO: null, // 데이터 조회 요청 객체
}

// ListComponent 컴포넌트를 정의합니다.
const ListComponent = ({ queryObj, movePage, moveRead }) => {

  // 상태(State)를 사용하기 위해 useState 훅을 이용하고, initState를 초기 상태값으로 설정합니다.
  const [listData, setListData] = useState(initState)

  // useEffect 훅을 이용하여 컴포넌트가 마운트되거나 'queryObj'가 변경될 때 실행됩니다.
  useEffect(() => {

    // 'getList' 함수를 이용하여 'queryObj'를 이용하여 데이터를 조회합니다.
    getList(queryObj).then(data => {
      console.log(data)

      // 조회된 데이터를 'listData' 상태로 설정하여 화면에 반영합니다.
      setListData(data)

    }).catch(err => {
      console.log("------------------------------------------------------")
      console.log(err)
      console.log("------------------------------------------------------")
    })

  }, [queryObj])



  return ( // 'ListComponent' 컴포넌트의 렌더링 결과를 반환합니다.
    <div className="m-2 p-2 border-2 bg-blue-400">
      <div> ListComponent</div>

      <div>
        {/* 조회된 데이터 목록을 화면에 렌더링합니다. */}
        <ul className="flex flex-wrap container justify-center">
          {listData.dtoList.map(dto =>
            <li className="w-2/5 h-[300px] bg-zinc-400 m-2 p-2 rounded-md shadow-lg"
              key={dto.pno}
              onClick={() => moveRead(dto.pno)}
            >
              <div className="">
                <div className="text-white font-extrabold">{dto.pno}</div>
              </div>
              <div className="flex justify-center items-center">
                <img src={`http://localhost/s_${dto.fname}`} alt="add"></img>
                <div className="text-center text-white font-extrabold">{dto.pname} - {dto.price} 리뷰  {dto.reviewCnt} - {dto.reviewAvg} </div>
                <div>
                </div>
              </div>
            </li>)}

        </ul>
      </div>

      {/* 페이지 관련 컴포넌트인 'ListPageComponent'를 렌더링하고, 필요한 상태 및 함수를 전달합니다. */}
      <ListPageComponent movePage={movePage} {...listData}></ListPageComponent>

    </div>
  );
}

export default ListComponent;