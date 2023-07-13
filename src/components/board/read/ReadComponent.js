import { useEffect, useState } from "react";
import { getOne } from "../../../api/boardAPI";


const initState = {
    //useEffect쓸떄 initState정의해줌
    bno: 0,
    title: '',
    content: '',
    writer: '',
    regDate: '',
    modDate: '',
}

const ReadComponent = ({bno}) => {
    const [board, setBoard] = useState(initState)
    // useEffect(() => {
    //     getOne(bno).then(data => {
    //         setBoard(data)
    //     })
    // }, [bno])
    return (
        <div className="col-span-12 ">
        <form className="bg-white shadow-md rounded-md p-4 ">
          <div className="flex justify-between items-center mb-4 bg-orange-100">
            <label  htmlFor="id" className="mr-2">번호: {board.bno}</label>
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