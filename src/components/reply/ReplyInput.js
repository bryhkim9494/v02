import { useEffect, useState } from "react";
import { postReply } from "../../api/repliesAPI";


const initState = {
  bno: 0,
  replyText: '',
  replyFile: '',
  replyer: '',
}

const ReplyInput = ({ bno, refreshLast }) => {

  // 댓글 입력 상태를 관리하는 state
  const [reply, setReply] = useState({ ...initState });

  // 입력값 변경 시 실행되는 함수
  const handleChange = (e) => {
    reply[e.target.name] = e.target.value; // 입력한 값을 reply 상태에 업데이트
    setReply({ ...reply }); // 변경된 reply 상태를 업데이트
  }

  // 등록 버튼 클릭 시 실행되는 함수
  const handleClickRegister = (e) => {

    // 댓글의 bno 필드에 현재 글의 번호(bno)를 설정
    reply.bno = bno

    // postReply 함수를 호출하여 댓글을 등록하고, 등록 결과를 처리
    postReply(reply).then(data => {
      console.log(data)
      alert(`${data.result}번 댓글이 등록완료`)

      // 댓글 등록 후, 화면에 표시되는 댓글 목록을 갱신하기 위해 refreshLast 함수 호출
      refreshLast()

      // 댓글 입력 상태를 초기화
      setReply({ ...initState })
    })

  }
  return (
    <div className="m-4 bg-red-200 border-2">
      <div className="text-sm font-semibold ml-3">Write a Comment</div>
      <div className="m-2">
        <input
          type="text"
          name="replyText"
          value={reply.replyText}
          onChange={handleChange}
          className="border rounded-md py-1 px-2 w-full text-sm"
        />
      </div>
      <div className="m-2">
        <input
          type="text"
          name="replyer"
          value={reply.replyer}
          onChange={handleChange}
          className="border rounded-md py-1 px-2 w-full text-sm"
        />
      </div>
      <div className="m-2">
        {/* 등록 버튼 클릭 시 handleClickRegister 함수 실행 */}
        <button onClick={handleClickRegister} className="border rounded-md py-1 px-2 bg-blue-500 text-white text-sm">
          등록
        </button>
      </div>
    </div>


  );
}

export default ReplyInput;