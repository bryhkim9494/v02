

const ListPageComponent = ({ movePage, start, end, prev, next, pageNums, page }) => {

    // 페이지 번호를 클릭했을 때, 해당 페이지로 이동하는 함수
    const handleClickPage = (pageNum) => {
        movePage(pageNum) // movePage 함수를 호출하여 해당 페이지로 이동합니다.
    }

    return (
        <div className="flex m-4 p-2 justify-center">
            <ul className="flex">

                {/* 이전 페이지로 이동하는 버튼 */}
                {prev ? <li className="m-2 p-2 bg-blue-500 border-2 text-white font-bold" onClick={() => handleClickPage(start - 1)}>PREV</li> : <></>}

                {/* 페이지 번호를 나타내는 버튼들 */}
                {pageNums.map(num => <li className="m-2 p-2 bg-blue-500 border-2 text-white font-bold"
                    onClick={() => handleClickPage(num)} // 페이지 번호를 클릭했을 때, 해당 페이지로 이동하는 함수를 호출합니다.
                    key={num}>
                    {page === num ? <span className="text-red-500">{num}</span> : <span>{num}</span>}</li>)}

                {/* 다음 페이지로 이동하는 버튼 */}
                {next ? <li className="m-2 p-2 bg-blue-500 border-2 text-white font-bold" onClick={() => handleClickPage(end + 1)}>NEXT</li> : <></>}
            </ul>
        </div>
    );
}

export default ListPageComponent;