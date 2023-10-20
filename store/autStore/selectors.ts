import {AppState} from "./store";

export const selectAuthState = (state: AppState) => state.auth.authState;
