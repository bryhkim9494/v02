import { useParams } from "react-router-dom";
import useQueryObj from "../../hooks/useQueryObj";
import ModifyComponent from "../../components/products/ModifyComponent";
import useCustomLogin from "../../hooks/useCustomLogin";


const ModifyPage = () => {
    const { loginInfo } = useCustomLogin((nav) => { // nav 실제 실행할떄 ModifyPage안에 fn(navigate)랑 똑같음
        nav('../list')
    })

    const { queryObj, moveList, moveModify,moveRead } = useQueryObj()
    const { pno } = useParams()

    return (

        <div>
            <div>Product Modify Page {pno}</div>
            <ModifyComponent pno={pno} moveList={moveList} moveRead={moveRead}>

            </ModifyComponent>
        </div>
    );
}

export default ModifyPage;