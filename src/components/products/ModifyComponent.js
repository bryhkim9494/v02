import { useEffect, useRef, useState } from "react"
import { deleteProduct, getProduct, putProduct } from "../../api/productAPI"

// 초기 상태값을 정의하는 객체입니다.
const initState = {
    pno: 0,         // 상품 번호
    pname: '',      // 상품 이름
    pdesc: '',      // 상품 설명
    price: 0,       // 상품 가격
    images: [],     // 상품 이미지 배열
}

// ModifyComponent 컴포넌트를 정의합니다.
const ModifyComponent = ({ pno, moveList, moveRead }) => {

    const fileRef = useRef()
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
    const handleChange = (e) => {
        product[e.target.name] = e.target.value
        setProduct({ ...product }) // 여기 코드로 제목 내용 작성자까지는 해결
    }
    const handleClickModify = () => {
        const formData = new FormData();

        formData.append("pno", product.pno)
        formData.append("pname", product.pname)
        formData.append("pdesc", product.pdesc)
        formData.append("price", product.price)


        if (product.images) {
            for (let pi of product.images) {
                formData.append("images", pi)
            }
        }



        const arr = fileRef.current.files

        for (let file of arr) {
            formData.append("files", file)
        }
        putProduct(formData).then(data => {
            alert('수정되었습니다.')

            moveRead(pno)
        })
    }

    const handleClickDelImg = (fname) => {

        const newArr = product.images.filter(ele => ele !== fname)
        product.images = newArr
        setProduct({ ...product })
    }


    return (
        <div>
            <div className="m-2 p-2 border-2">
                {product.pno}
            </div>
            <div className="m-2 p-2 border-2">
                <input type="text" name="pname" value={product.pname} onChange={handleChange}></input>
            </div>
            <div className="m-2 p-2 border-2">
                <input type="text" name="pdesc" value={product.pdesc} onChange={handleChange}></input>
            </div>
            <div className="m-2 p-2 border-2">
                <input type="number" name="price" value={product.price} onChange={handleChange}></input>
            </div>
            <div className="m-2 p-2 border-2">
                <input type="file" ref={fileRef} multiple name="images"></input>
            </div>

            <div className="m-2 p-2 border-2">
                <ul className="list-none flex">
                    {product.images.map((fname, idx) => <li key={idx} className="m-2">
                        <img src={`http://localhost/s_${fname}`}></img>
                        <button className="bg-red-500 m-2 p-2" onClick={() => handleClickDelImg(fname)}>x</button>
                    </li>)}
                </ul>
            </div>
            <div>
                <button className="bg-teal-500 border-2 m-2 p-2 text-white font-extrabold " onClick={handleClickModify}>Modify</button>
                <button className="bg-blue-500 border-2 m-2 p-2 text-white font-extrabold " onClick={moveList}>List</button>
                <button className="bg-red-500 border-2 m-2 p-2 text-white font-extrabold " onClick={handleClickDelete}>Delete</button>
            </div>
        </div>
    );
}

export default ModifyComponent;