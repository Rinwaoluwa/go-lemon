import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IState {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const initialState: IState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
}

export const profileSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        profile: {
            prepare: (data) => {
                return {
                    payload: {
                        firstName: data.firstName,
                        lastName: data.lastName,
                        email: data.email,
                        password: data.password,
                    },
                    meta: undefined,
                    error: undefined,
                }
            },
            reducer: (state, action) => {
                state.firstName = action.payload.firstName;
                state.lastName = action.payload.lastName;
                state.email = action.payload.email;
                state.password = action.payload.password;
            }
        },
        updateProfile: {
            prepare: (data) => {
                return {
                    payload: {
                        firstName: data.firstName,
                        lastName: data.lastName,
                        email: data.email,
                    },
                    meta: undefined,
                    error: undefined,
                }
            },
            reducer: (state, action) => {
                state.firstName = action.payload.firstName;
                state.lastName = action.payload.lastName;
                state.email = action.payload.email;

            }
        }
    }
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;