import { createSlice } from "@reduxjs/toolkit";



const countSlice = createSlice({// createSlice도 함수임 , 옵션을 추가해야해서 객체로 만듬 , createSlice가 스토어(=금고)와 리듀서(=금고지기)를 연결함
    name: 'CountSlice',
    initialState: { num: 5 },
    reducers: {
        inc: (state) => {
            console.log("inc........")
        },
        dec: (state) => {
            console.log("dec........")
        }
    }

})
export const { inc, dec } = countSlice.actions // 밑에 두줄은 RTK에서 이렇게 쓰라고 그냥 외우면 편함
export default countSlice.reducer