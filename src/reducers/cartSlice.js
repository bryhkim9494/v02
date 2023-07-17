import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initState = {
    items: [],
    loading: false,

    // 나중에 상태데이터가 추가되더라도 커스터마이징 하기 쉽게 하기위해 저렇게 만듬
}
export const addCartThunk = createAsyncThunk('addCartThunk', async (item) => {
    const res = await axios.post('http://localhost:8080/api/cart/add', item) // 나중에 cartAPI로 빼줘야함
    return res.data
})

export const getCartThunk = createAsyncThunk('getCartThunk', async (email) => {
    if (!email) {
        return new Promise((resolve, reject) => {
            resolve([])
        })
    }
    const res = await axios.get(`http://localhost:8080/api/cart/${email}`)
    return res.data
})

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: initState,
    extraReducers: (builder) => {
        builder.addCase(addCartThunk.fulfilled, (state, action) => {

            console.log(action.payload)
            state.items = action.payload
        }).addCase(getCartThunk.fulfilled, (state, action) => {
            console.log("getCartThunk fulfilled ....")

            console.log(action.payload)
            state.items = action.payload
        })

    }
})

export default cartSlice.reducer

