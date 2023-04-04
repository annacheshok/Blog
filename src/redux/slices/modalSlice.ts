import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
    visible: boolean
};

const initialState: ModalState = {
    visible: false
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        changeVisible: (state) => {
            state.visible = !state.visible;
        },
    },
});

export const { changeVisible } = modalSlice.actions;

const modalReducer = modalSlice.reducer;
export default modalReducer;