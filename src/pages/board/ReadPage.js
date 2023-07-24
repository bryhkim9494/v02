import { useParams } from "react-router-dom";
import useQueryObj from "../../hooks/useQueryObj";
import ReadComponent from "../../components/board/read/ReadComponent";
import ReplyWrapper from "../../components/reply/ReplyWrapper";


const ReadPage = () => { // 해당 컴포넌트는 게시글 상세 내용을 보여주는 ReadComponent와 댓글을 보여주는 ReplyWrapper 컴포넌트를 렌더링하고, 
                        //'List' 버튼을 클릭하면 moveList 함수를 호출하여 리스트 페이지로 이동하는 기능을 구현합니다.

     // useQueryObj 커스텀 훅을 사용하여 쿼리 파라미터와 관련된 상태와 함수를 가져옵니다.
    const { queryObj, moveList } = useQueryObj()

    // useParams 훅을 사용하여 URL 파라미터에서 bno 값을 가져옵니다.
    const { bno } = useParams()

    console.log(bno)
    console.log(queryObj)
    // 리액트에서는 로직을 공유할때 쓰는 Hooks를  한다.
    return (
        <div>
            {/* Board Read Page */}

            {/* 게시글 상세 내용을 보여주는 ReadComponent 컴포넌트를 렌더링합니다. */}
            <ReadComponent bno={bno}></ReadComponent>
            
            {/* 댓글을 보여주는 ReplyWrapper 컴포넌트를 렌더링합니다. */}
            <ReplyWrapper bno={bno}></ReplyWrapper>

            {/* 'List' 버튼을 클릭하면 moveList 함수가 호출되도록 설정합니다. */}
            <button onClick={e => moveList()}>List</button>
        </div>
    );
}

export default ReadPage;