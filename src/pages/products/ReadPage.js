import { useParams } from "react-router-dom"
import useQueryObj from "../../hooks/useQueryObj"


const ReadPage = () => {
    const { queryObj, moveList } = useQueryObj()
    const { pno } = useParams()

    console.log(pno)
    console.log(queryObj)

    return (
        <div>{pno}</div>
    );
}

export default ReadPage;