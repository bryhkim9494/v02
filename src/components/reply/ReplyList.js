import { useEffect, useState } from "react";
import { getRepliesOfBoard } from "../../api/repliesAPI";
import ListPageComponent from "../common/ListPageComponent";

// 초기 상태 객체
const initState = { // ReplyList컴포넌트는 댓글 목록을 표시하는 역할을 합니다
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

const ReplyList = ({ bno, page, last, movePage, refresh, changeCurrent }) => {
    console.log("Reply List ...bno " + bno)

    // listData: 댓글 목록 상태를 관리하는 useState 훅
    const [listData, setListData] = useState(initState);

    // useEffect: 댓글 목록을 가져오기 위한 side effect 로직
    useEffect(() => {

        // getRepliesOfBoard 함수를 사용하여 서버로부터 댓글 목록 데이터를 가져옴
        getRepliesOfBoard(bno, page, last).then(data => {
            console.log(data)

            // 가져온 댓글 목록 데이터를 listData 상태에 업데이트
            setListData(data)
        })

    }, [bno, page, last, refresh])

    return (
        <div className="m-8 bg-red-300 border-2">
  <div>Reply List</div>
  <div>
    <ul>
      {listData.dtoList.map(reply => (
        
        // 각 댓글을 표시하는 li 요소, changeCurrent 함수를 클릭 이벤트에 연결하여 댓글 rno를 전달
        <li key={reply.rno} onClick={() => changeCurrent(reply.rno)} className="cursor-pointer">
          {reply.rno} -- {reply.replyText}
        </li>
      ))}
    </ul>

    {/* ListPageComponent 컴포넌트를 렌더링하고, listData와 movePage 함수를 props로 전달 */}
    <ListPageComponent {...listData} movePage={movePage} />
  </div>
</div>
    );
}

export default ReplyList;