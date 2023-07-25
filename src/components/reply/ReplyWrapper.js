import { useEffect, useState } from "react";
import ReplyList from "./ReplyList";
import ReplyInput from "./ReplyInput";
import ReplyRead from "./ReplyRead";

const initState = { // 상태값 초기화
    bno: 0,           // 게시물 번호 초기값
    page: 1,          // 페이지 번호 초기값
    last: false,      // 댓글 페이지 마지막 여부 초기값
    refresh: false,   // 댓글 목록 새로고침 여부 초기값
    current: 0,       // 현재 선택된 댓글 번호 초기값
}

// ReplyWrapper 컴포넌트를 정의합니다.
const ReplyWrapper = ({ bno }) => {

    // 상태(State)를 사용하기 위해 useState 훅을 이용하고, initState를 초기 상태값으로 설정합니다.
    const [data, setData] = useState(initState);

    // useEffect 훅을 이용하여 컴포넌트가 마운트되거나 'bno'가 변경될 때 실행됩니다.
    useEffect(() => {

        // 'bno' 값을 'data' 상태의 'bno', 'last', 'page' 값으로 설정하고 'setData' 함수를 호출하여 상태를 갱신합니다.
        data.bno = bno
        data.last = true
        data.page = 1
        setData({ ...data }) // 기존 상태를 복사하여 새로운 객체를 생성하여 상태를 업데이트합니다.

    }, [bno])

    const changeCurrent = (rno) => { // 'changeCurrent' 함수는 선택된 댓글 번호를 업데이트하는 역할을 합니다.
        data.current = rno
        setData({ ...data }) // 상태를 갱신합니다.
    }

    const movePage = (num) => {  // 'movePage' 함수는 페이지를 이동하고 관련 상태들을 업데이트합니다.

        console.log("num : " + num)

        data.page = num;          // 페이지 번호를 업데이트합니다.
        data.last = false;        // 마지막 페이지 여부를 false로 설정합니다.
        data.refresh = !data.refresh; // 데이터 새로고침 상태를 반전시킵니다.
        setData({ ...data });     // 상태를 갱신합니다.

    }
    const refreshLast = () => { // 'refreshLast' 함수는 마지막 페이지 여부와 데이터 새로고침 상태를 업데이트합니다.

        data.last = true;             // 마지막 페이지 여부를 true로 설정합니다.
        data.refresh = !data.refresh; // 데이터 새로고침 상태를 반전시킵니다.
        setData({ ...data });         // 상태를 갱신합니다.
    }

    const cancleRead = () => { // 'cancleRead' 함수는 선택된 댓글을 취소하고 관련 상태를 초기화합니다.

        data.current = 0;           // 선택된 댓글 번호를 0으로 설정하여 선택된 댓글이 없음을 나타냅니다.
        setData({ ...data });       // 상태를 갱신합니다.
    }

    const refreshPage = (hide) => { // 'refreshPage' 함수는 페이지를 새로고침하고 선택된 댓글을 숨길지 여부를 판단하여 관련 상태를 업데이트합니다.
        data.refresh = !data.refresh; // 데이터 새로고침 상태를 반전시킵니다.
        if (hide) {
            data.current = 0;         // 선택된 댓글 번호를 0으로 설정하여 선택된 댓글을 숨깁니다.
        }
        setData({ ...data });         // 상태를 갱신합니다.
    }
    
    // 댓글 작성을 위한 ReplyInput 컴포넌트와 선택된 댓글을 보여주는 ReplyRead 컴포넌트, 그리고 댓글 목록을 보여주는 ReplyList 컴포넌트를 렌더링합니다.

    

    return ( // React 컴포넌트의 return 문은 JSX 문법을 사용하여 컴포넌트가 브라우저에 어떻게 렌더링될지를 정의합니다. 
        <div>
            <ReplyInput bno={bno} refreshLast={refreshLast}></ReplyInput>

            {/* data.current이 0이 아닌 경우에는 ReplyRead 컴포넌트를 렌더링합니다.
                선택된 댓글 번호(rno)와 선택 취소 함수(cancleRead)와 페이지 새로고침 함수(refreshPage)를 전달합니다. */}
            {data.current !== 0 ? <ReplyRead rno={data.current} cancleRead={cancleRead} refreshPage={refreshPage}></ReplyRead> : <></>}

            {/* ReplyList 컴포넌트에 data 객체의 모든 속성과 movePage 함수와 changeCurrent 함수를 전달합니다. */}
            <ReplyList {...data} movePage={movePage} changeCurrent={changeCurrent}></ReplyList>
        </div>
    );
}

export default ReplyWrapper;