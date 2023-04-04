import themeReducer from './slices/themeSlice';
import postsReducer from './slices/postsSlice';
import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from './slices/registrationSlice';
import modalReducer from './slices/modalSlice';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        posts: postsReducer,
        registration: registrationReducer,
        modal: modalReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
