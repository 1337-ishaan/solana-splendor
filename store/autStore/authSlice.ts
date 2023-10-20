import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export interface AuthState {
    authState: boolean;
}

const initialState: AuthState = {
    authState: true,//just for test while we don't authorization
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthState(state, action: PayloadAction<boolean>) {
            state.authState = action.payload;
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.auth,
            };
        },
    },
});

export const { setAuthState } = authSlice.actions;

export default authSlice.reducer;
