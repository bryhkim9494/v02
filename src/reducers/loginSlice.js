import { createSlice } from "@reduxjs/toolkit";

const initState = {
    email: '',
    signed: false,
}

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: initState,
    reducers: {
        requestLogin: (state, param) => {
            const payload = param.payload
            console.log("requestLogin", payload)
            return { email: payload.email, signed: true }
        }
    }
})

export const { requestLogin } = loginSlice.actions // 밑에 두줄은 RTK에서 이렇게 쓰라고 그냥 외우면 편함
export default loginSlice.reducer