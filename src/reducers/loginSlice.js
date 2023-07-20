import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCookie, setCookie } from "../util/cookieUtil";
import { postLogin } from "../api/memberAPI";

export const postLoginThunk = createAsyncThunk('postLoginThunk', (params) => {

    return postLogin(params)

})

const loadCookie = () => {
    const loginObj = getCookie("login")
    console.log("login.......................obj........................")
    console.log(loginObj)

    if (!loginObj) {
        return initState
    }
    return loginObj
}

const initState = {
    email: '',
    nickname: '',
    admin: false,
    loading: false,
    errorMsg: null,

}

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: loadCookie(),
    reducers: {
        requestLogin: (state, action) => {
            const payload = action.payload
            console.log("requestLogin", payload)

            setCookie("login", JSON.stringify(payload), 1) // 쿠키에 저장하는 코드 , loginObj는 payload값

            
            return {...action.payload, loading:false}
        }
    },
    extraReducers: (builder) => {
        builder.addCase(postLoginThunk.fulfilled, (state, action) => {
            console.log("fulfiled", action.payload)
            const { email, nickname, admin, errorMsg } = action.payload
            if (errorMsg) {
                state.errorMsg = errorMsg
                return

            }

            // state.loading = false
            // state.email = email
            // state.nickname = nickname
            // state.admin = admin
            
            state = action.payload
            setCookie("login", JSON.stringify(action.payload), 1)
        })
            .addCase(postLoginThunk.pending, (state, action) => {
                console.log("pending")
                state.loading = true
            })
            .addCase(postLoginThunk.rejected, (state, action) => {
                console.log("rejected")

            })
    }
})

export const { requestLogin } = loginSlice.actions // 밑에 두줄은 RTK에서 이렇게 쓰라고 그냥 외우면 편함

export default loginSlice.reducer