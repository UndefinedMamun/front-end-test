import { createSlice } from '@reduxjs/toolkit';

const getObj = () => {
    const str = localStorage.getItem("auth");
    if(str) return JSON.parse(str);
    return null;
}

// Define a type for the slice state
interface AuthState {
    isLoggedIn: boolean
    userName: string;
}

// Define the initial state using that type
const initialState: AuthState = {
    isLoggedIn: getObj() ? getObj().isLoggedIn : false,
    userName: getObj() ? getObj().userName : "",
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        toggleAuth: (state, { payload }) => {
            state.isLoggedIn = payload;
        },
        setUserName: (state, { payload }) => {
            state.userName = payload
        }
    },
})



export const { toggleAuth, setUserName} = authSlice.actions;

export default authSlice.reducer