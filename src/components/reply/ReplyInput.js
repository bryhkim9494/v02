import { useEffect, useState } from "react";
import { postReply } from "../../api/repliesAPI";


const initState = {
    bno: 0,
    replyText: '',
    replyFile: '',
    replyer: '',
}

const ReplyInput = ({ bno, refreshLast }) => {

    const [reply, setReply] = useState({ ...initState });

    const handleChange = (e) => {
        reply[e.target.name] = e.target.value ///???
        setReply({ ...reply })
    }
    const handleClickRegister = (e) => {


        reply.bno = bno

        postReply(reply).then(data => {
            console.log(data)
            alert(`${data.result}번 댓글이 등록완료`)

            refreshLast()

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
          <button onClick={handleClickRegister} className="border rounded-md py-1 px-2 bg-blue-500 text-white text-sm">
            등록
          </button>
        </div>
      </div>


    );
}

export default ReplyInput;