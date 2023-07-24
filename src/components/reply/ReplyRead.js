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

    // 댓글 데이터를 저장하기 위한 상태 선언
    const [reply, setReply] = useState(initState)
    
    useEffect(() => { // 'rno' prop이 변경될 때마다 댓글 데이터를 서버에서 가져오는 함수
        getReply(rno).then(data => {
            console.log(data)
            setReply(data)
        })
    }, [rno]) // rno가 변경되면 실행하겠다는뜻

    const handleClickDelete = () => { // 댓글 삭제 버튼 클릭 시 실행되는 함수
        deleteReply(rno).then(data => {
            alert(`${data.result}번 댓글이 삭제되었습니다.`)
            refreshPage(true) // 페이지 새로고침을 트리거
        })
    }

    const handleChange = (e) => { // 입력 필드 값 변경 시 실행되는 함수
        reply[e.target.name] = e.target.value
        setReply({ ...reply }) // 수정된 값을 갖는 'reply' 상태를 업데이트
    }

    const handleClickModify = () => { // 댓글 수정 버튼 클릭 시 실행되는 함수
        putReply(reply).then(data => {
            alert(`${data.result}번 댓글이 수정되었습니다.`) // 페이지 새로고침을 트리거
            refreshPage(true);
        })
    }
    
    // 댓글이 삭제되었을 경우 빈 요소 반환
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