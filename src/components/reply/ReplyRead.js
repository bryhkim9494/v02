import { useEffect, useState } from "react";
import { deleteReply, getReply, putReply } from "../../api/repliesAPI";

const initState = {
    rno: 0,
    bno: 0,
    replyText: '',
    replyFile: '',
    replyer: '',
}

const ReplyRead = ({ rno, cancleRead, refreshPage }) => {

    console.log("ReplyRead................................... rno: " + rno)
    const [reply, setReply] = useState(initState)
    useEffect(() => {
        getReply(rno).then(data => {
            console.log(data)
            setReply(data)
        })
    }, [rno]) // rno가 변경되면 실행하겠다는뜻
    const handleClickDelete = () => {
        deleteReply(rno).then(data => {
            alert(`${data.result}번 댓글이 삭제되었습니다.`)
            refreshPage(true)
        })
    }

    const handleChange = (e) => {
        reply[e.target.name] = e.target.value
        setReply({ ...reply })
    }
    const handleClickModify = () => {
        putReply(reply).then(data => {
            alert(`${data.result}번 댓글이 수정되었습니다.`)
            refreshPage(true);
        })
    }
    if (reply.replyText === '해당 글은 삭제되었습니다.') {
        return <></>
    }

    return (
        <div className="m-8 bg-blue-200 border-2">
            <div>Reply Read {rno}</div>
            <div>
                <div>{rno}</div>
                <div>
                    <input type="text"
                        name="replyText"
                        onChange={handleChange}
                        value={reply.replyText}>
                    </input>
                </div>
                <div>{reply.replyer}</div>
            </div>
            <div>
                <button onClick={handleClickModify} className="m-2">MODIFY</button>
                <button onClick={handleClickDelete} className="m-2">DELETE</button>
                <button onClick={cancleRead}>CANCLE</button>
            </div>
        </div>
    );
}

export default ReplyRead;