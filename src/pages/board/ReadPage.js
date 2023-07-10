import { useParams } from "react-router-dom";
import useQueryObj from "../../hooks/useQueryObj";
import ReadComponent from "../../components/board/read/ReadComponent";
import ReplyWrapper from "../../components/reply/ReplyWrapper";


const ReadPage = () => {
    const { queryObj, moveList } = useQueryObj()
    const { bno } = useParams()

    console.log(bno)
    console.log(queryObj)
    // 리액트에서는 로직을 공유할때 쓰는 Hooks를  한다.
    return (
        <div>
            {/* Board Read Page */}
            <ReadComponent bno={bno}></ReadComponent>
            
            <ReplyWrapper bno={bno}></ReplyWrapper>

            <button onClick={e => moveList()}>List</button>
        </div>
    );
}

export default ReadPage;