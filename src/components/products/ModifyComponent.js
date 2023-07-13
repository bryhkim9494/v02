import { useEffect, useState } from "react"
import { deleteProduct, getProduct } from "../../api/productAPI"

const initState = {
    pno: 0,
    pname: '',
    pdesc: '',
    price: 0,
    images: [],
}

const ModifyComponent = ({ pno, moveList, moveRead }) => {

    const [product, setProduct] = useState(initState)

    useEffect(() => {
        getProduct(pno).then(data => {
            setProduct(data)
        })
    }, [pno])

    const handleClickDelete = () => {
        deleteProduct(pno).then(data => {
            alert("상품 삭제")
            
        })
    }
    return (
        <div>
            <div className="m-2 p-2 border-2">
                {product.pname}
            </div>
            <div className="m-2 p-2 border-2">
                {product.pdesc}
            </div>
            <div className="m-2 p-2 border-2">
                {product.price}
            </div>

            <div className="m-2 p-2 border-2">
                <ul className="list-none flex">
                    {product.images.map((fname, idx) => <li key={idx} className="m-2">
                        <img src={`http://localhost/s_${fname}`}></img>
                    </li>)}
                </ul>
            </div>
            <div>
                <button className="bg-blue-500 border-2 m-2 p-2 text-white font-extrabold " onClick={moveList}>List</button>
                <button className="bg-red-500 border-2 m-2 p-2 text-white font-extrabold " onClick={handleClickDelete}>Delete</button>
            </div>
        </div>
    );
}

export default ModifyComponent;