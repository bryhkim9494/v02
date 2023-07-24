import { useEffect, useState } from "react";
import { getOne } from "../../../api/boardAPI";


const initState = { // 초기 상태 정의

  //useEffect쓸떄 initState정의해줌
  bno: 0,
  title: '',
  content: '',
  writer: '',
  regDate: '',
  modDate: '',
}

const ReadComponent = ({ bno }) => { // 해당 컴포넌트는 게시글의 상세 내용을 화면에 표시하는 폼을 렌더링합니다. 

  const [board, setBoard] = useState(initState) // 상태 변수 board와 setter 함수 setBoard를 선언합니다.
  
  useEffect(() => { // useEffect 훅을 사용하여 bno가 변경될 때마다 getOne 함수를 호출하여 해당 bno에 해당하는 게시글 데이터를 가져와 board 상태에 저장하고, 이를 화면에 표시합니다. 

    // getOne 함수를 호출하여 해당 bno에 해당하는 게시글 데이터를 가져옵니다.
    // 가져온 데이터를 board 상태에 저장합니다.
     
    getOne(bno).then(data => {
      setBoard(data)
    })
  }, [bno])

  return (

    // 게시글 데이터를 화면에 표시하는 폼을 렌더링합니다.
    <div className="col-span-12 ">
      <form className="bg-white shadow-md rounded-md p-4 ">
        <div className="flex justify-between items-center mb-4 bg-orange-100">
          <label htmlFor="id" className="mr-2">번호: {board.bno}</label>
          <input type="hidden" id="id" value={board.bno} />
          <label htmlFor="createdDate">{board.regDate}</label>
        </div>
        <div className="bg-orange-100  justify-between items-center mb-4">
          <label htmlFor="writer" className=" mr-2">작성자: {board.writer}</label>
          <label htmlFor="view"><i className="bi bi-eye-fill"></i> {board.view}</label>
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="mr-2">제목</label>
          <input type="text" className="border rounded-md p-2 w-full bg-orange-100" id="title" value={board.title} readOnly />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="mr-2 ">내용</label>
          <textarea rows="5" className="border rounded-md p-2 w-full bg-orange-100" id="content" readOnly>{board.content}</textarea>
        </div>
      </form>
    </div>
  );
}

export default ReadComponent;