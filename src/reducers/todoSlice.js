import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: "todoSlice",
    initialState: ['AAA', 'BBB'],
    reducers: {
        addTodo: (state, param) => {
            console.log("todo...." , state)
            return [...state, param.payload]
        }
    }
})

export const { addTodo } = todoSlice.actions // 밑에 두줄은 RTK에서 이렇게 쓰라고 그냥 외우면 편함
export default todoSlice.reducer