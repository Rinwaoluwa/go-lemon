import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IState {
    isAuthenticated: boolean;
}

const initialState: IState = {
    isAuthenticated: false,
}

export const authTrackerSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
            state.isAuthenticated = action.payload;
        }
    }
});

export const { setIsAuthenticated } = authTrackerSlice.actions;
export default authTrackerSlice.reducer;