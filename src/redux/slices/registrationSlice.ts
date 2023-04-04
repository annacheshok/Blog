import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "../../api";
import { IUser } from "../../types";

interface IInitialState {
    isAuthorized: boolean;
}

const initialState: IInitialState = {
    isAuthorized: false
}

export const getUsers = createAsyncThunk(
    "posts/getUsers",
    async (_, thunkApi) => {
        try {
            const response = await authApi.get('/user');
            return response.data;

        } catch (error: any) {
            return thunkApi.rejectWithValue({ errorMessage: error.message });
        }
    }
);

export const registrationSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setAuthorized: (state, action: PayloadAction<boolean>) => {
            state.isAuthorized = action.payload
        },
    },
    extraReducers:
        (builder) => {
            builder.addCase(getUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
            })
        }
})

export const { setAuthorized } = registrationSlice.actions;


const registrationReducer = registrationSlice.reducer;
export default registrationReducer;